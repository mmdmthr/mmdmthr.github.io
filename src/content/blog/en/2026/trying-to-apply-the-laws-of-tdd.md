---
title: 'Trying to Apply the Laws of TDD'
pubDate: 2026-02-18
description: "After actually practicing TDD's three laws, I discovered benefits that reading about it never made obvious — including reduced cognitive load and guided momentum."
heroImage: '/blog-placeholder-2.jpg'
tags: 'notes'
---

I read many articles about TDD. After actually practicing the laws myself, I started noticing benefits that weren’t obvious from theory alone.

**1. The thinking load drops significantly**

Without TDD, I usually try to picture the entire solution in my head before writing any code — the flow, the data structure, the edge cases. It sounds organized in theory, but in practice it’s exhausting.

With TDD, I’m forced to work step by step. I only focus on one small behavior at a time. Because the test guides me, I no longer need to hold the entire design in my head simultaneously. The mental energy that used to go into remembering and imagining can now be used for clearer thinking.

**2. The workflow becomes guided**

Tests act like a checklist. They tell me what to do next.  
It sounds minor, but the effect is noticeable: I miss fewer things.

The implementation order also becomes natural. For example, building a *create* feature:

* start from the entry point (route),
* move to the controller,
* then the view,
* and finally the data migration or model.

Everything flows from the requirement instead of from assumptions in my head. Commits also become cleaner and easier to understand because each change has a clear purpose.

**3. More efficient**

We often feel the urge to add something “while we’re at it”, even though it’s not actually needed yet. TDD is strict about this: if no test is failing, don’t write the code.

Ironically, this makes the work finish faster. Energy doesn’t leak into extra features, premature optimization, or unnecessary architecture.

---

At first I thought TDD was mainly about code quality. After practicing it, the biggest impact turns out to be on thinking: the work feels lighter, the steps are clearer, and the focus stays on what is actually needed.
