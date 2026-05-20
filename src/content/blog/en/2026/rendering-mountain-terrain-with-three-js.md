---
title: 'Rendering Mountain Terrain with Three.js'
pubDate: 2026-05-20
description: 'After understanding the basics of heightmaps, vertices, and triangle meshes, I tried rendering a real mountain terrain in the browser using DEMNAS elevation data.'
tags: 'notes'
---

## Pipeline

```bash
DEMNAS (.tif)
→ Crop target area with GDAL
→ Convert DEM into heightmap PNG
→ Read pixel brightness
→ Apply elevation to vertices
→ Generate triangle mesh terrain
→ Render in Three.js
```

---

## 1. Download DEMNAS Data

I downloaded DEMNAS raster elevation data (.tif) for the target area.

The DEM contains:

* elevation values
* geographic coordinates
* terrain resolution data

At this stage, the data is still raw elevation data.

## 2. Crop the Terrain Area

The original DEM tile was too large covering the whole Java island.

I cropped the raster using GDAL only the mountain area needed:

```bash
gdal_translate \
  -projwin xmin ymax xmax ymin \
  input.tif \
  mountain.tif
```

This reduced the terrain to only the target mountain area.

## 3. Convert DEM into Heightmap PNG

Next, I converted the DEM into a grayscale heightmap.

```bash
gdal_translate \
  -ot Byte \
  -scale \
  mountain.tif \
  mountain_heightmap.png
```

In the heightmap:

* dark pixels represent lower elevation
* bright pixels represent higher elevation

The PNG is now a heightmap.

## 4. Load the heightmap in Three.js

In Three.js:

* the PNG brightness values were read pixel-by-pixel
* each pixel controlled vertex elevation
* vertices were connected into triangle meshes automatically by `PlaneGeometry`

Load the PNG image in the browser.

```js
const img = new Image()
img.src = "/mountain_heightmap.png"
```

## 5. Read pixel brightness values

Draw the image into a hidden canvas and read the pixel data.

```js
const imageData = ctx.getImageData(...)
```

Each pixel brightness represents elevation.

Conceptually:

```bash
(x, z) → height
```

## 6. Create terrain geometry

Create a subdivided plane geometry.

```js
new THREE.PlaneGeometry(
  width,
  height,
  segmentsX,
  segmentsY
)
```

This automatically creates:

- vertices
- triangles/faces

Initially the plane is flat.

## 7. Apply heightmap data to vertices

Loop through pixels and move vertices vertically.

```js
vertices.setY(index, height)
```

Now the flat plane becomes a mountain terrain.

## 8. Recalculate normals
```js
geometry.computeVertexNormals()
```
Normals are needed for proper lighting and smooth shading.

## 9. Create material and mesh
```js
const terrain = new THREE.Mesh(
  geometry,
  material
)
```
This combines:

- geometry (shape)
- material (surface appearance)

into a renderable 3D object.

## 10. Render the scene
```js
renderer.render(scene, camera)
```
The terrain is now rendered as a 3D mountain in the browser.

I also added:

* camera controls
* drag rotation
* zoom
* pan interaction

using OrbitControls.

---

## Result

The result already looks like a recognizable 3D terrain of the mountain.

[Check this on my GitHub](https://github.com/mmdmthr/learn-threejs)

However, the surface still appears:

* rough
* stepped
* similar to terracing/contour layers

This is likely caused by elevation quantization from the PNG pipeline and limited height precision.

---

## Next Steps

Things I still want to improve:

* smoother terrain surface
* better elevation precision
* satellite texture / realistic surface colors
* improved lighting and atmosphere
* more natural terrain shading

---

## Key Insight

A 3D mountain is not a “solid object”.

It is essentially:

> a grid of vertices whose heights are driven by elevation data and connected into many small triangles.
