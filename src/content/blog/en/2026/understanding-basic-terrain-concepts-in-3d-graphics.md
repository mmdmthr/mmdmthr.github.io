---
title: 'Understanding Basic Terrain Concepts in 3D Graphics'
pubDate: 2026-05-16
description: 'A beginner-friendly exploration of the core concepts behind 3D terrain rendering in Three.js — understanding heightmaps, vertices, triangles, and how elevation data becomes a real-time 3D mountain mesh in the browser.'
tags: 'notes'
---

## Heightmap

A heightmap is data that stores elevation.

Usually it is represented as:

* grayscale image
* matrix/array of numbers

Example:

```bash
0 0 0
0 8 0
0 0 0
```

The center area is higher than the surroundings.

A heightmap is not a 3D object yet.
It only answers:

> How high is this location?

Conceptually:

```bash
(x, z) → y
```

Meaning:

* `x` and `z` determine the horizontal position
* `y` is the elevation

---

## Vertex

A vertex is a point in 3D space.

A vertex contains:

* X position
* Y position
* Z position

Example:

```bash
(10, 5, 20)
```

Meaning:

* `x = 10`
* `y = 5`
* `z = 20`

A single vertex is only a point.
It does not form a surface yet.

In terrain systems:

* `x` and `z` usually form the ground grid
* heightmap data modifies the `y` value

---

## Triangle / Face

A triangle (face) is the simplest possible surface in 3D graphics.

It is formed by connecting 3 vertices.

```bash
•
|\
| \
•--•
```

Modern 3D graphics are built mostly from triangles because:

* they are mathematically stable
* always planar
* efficient for GPUs

Complex objects are simply many small triangles connected together.

---

## Terrain in 3D Graphics

A terrain is essentially:

* a grid of vertices
* where each vertex gets elevation from a heightmap
* then connected into triangles

Pipeline:

```bash
Heightmap
→ Vertex elevation
→ Triangles
→ Terrain mesh
```

A smoother terrain usually means:

* more vertices
* more triangles
* more processing cost

---

## Understanding 3D Model Statistics

Example:

```bash
Triangles: 22k
Vertices: 11.1k
```

Meaning:

* the model surface is built from ~22,000 triangles
* the model contains ~11,100 vertices

More triangles generally mean:

* more detail
* smoother shape
* heavier rendering cost

---

## Key Insight

3D terrain is not a “solid mountain”.

It is actually:

> many connected triangles shaped by elevation data.