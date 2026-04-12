---
title: 'Implementing Static Search in Astro Using Pagefind'
pubDate: 2026-04-12
description: 'Learn how to implement a fast, static search feature in Astro using Pagefind—no custom scripts or heavy JavaScript required.'
tags: 'notes'
---

I wanted a search feature for my Astro blog. I used to rely on a basic JavaScript filter for my posts, but now I want to eliminate JavaScript altogether.

Simple requirement:

* no backend
* free
* fast
* works well with static content

I ended up using **[Pagefind](https://pagefind.app/)**.

It sounded straightforward.
This post is a summary of how I set it up.

---

## Why Pagefind?

Most search solutions require:

* a backend (Algolia, Meilisearch)
* or loading all content into the browser

Both don’t fit a static-first approach.

Pagefind is different:

* indexing happens at **build time**
* search runs **entirely in the browser**
* no external service
* no runtime cost

That aligns perfectly with Astro.

---

## The Core Concept (Important)

This is the part I initially underestimated:

> Pagefind does not read your data.
> It reads your **final HTML output**.

That means:

* it doesn't care about your `getCollection()`
* it doesn't care about your JS logic
* it only sees what exists in `/dist`

If something is not in the final HTML → it does not exist to Pagefind.

---

## The Setup (What Actually Works)

After trying multiple approaches, this is the clean solution:

### 1. Install integration

```js
import pagefind from 'astro-pagefind';

export default {
  integrations: [pagefind()],
};
```

---

### 2. Use the built-in component

```astro
---
import Search from "astro-pagefind/components/Search";
---

<Search 
  id="search"
  className="pagefind-ui"
  uiOptions={{ showImages: false }}
/>
```

That’s it.

No manual script.
No `window.pagefind`.
No custom loader.
And we can still customize the search component later.

---

## The Biggest Pitfall

Search UI showed up…
but **no results appeared**.

This is where I get stuck.

The issue was not JavaScript.
It was indexing.

---

## Fixing Indexing (Critical)

You need to explicitly tell Pagefind what to index.

### 1. Mark the content

```astro
<article data-pagefind-body>
  ...
</article>
```

---

### 2. Define title metadata

```astro
<h1 data-pagefind-meta="title">
  {title}
</h1>
```

---

### 3. (Optional) Add description

```astro
<p data-pagefind-meta="description">
  {description}
</p>
```

Without this, Pagefind may index poorly or return empty results.
We can also weight indexed content to control ranking and improve the generated excerpts.

---

## Debugging Strategy (That Actually Helped)

Instead of guessing, I used these checks:

### 1. Check built HTML

```
dist/blog/.../index.html
```

Ask:

* is there a `<title>`?
* is content visible?
* is it server-rendered?

---

## Final Thoughts

Pagefind is not hard.  
But it requires a shift in thinking:

> Stop thinking in data → start thinking in HTML output.

Once that clicks, everything becomes simple.
I think Pagefind is one of the best options If you're building a static site with Astro.