---
title: 'Duplication vs Wrong Abstraction'
pubDate: 2025-09-29
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'notes'
---

There’s a well-known tech talk by Sandi Metz called [*All The Little Things*](https://www.youtube.com/watch?v=8bZh5LMaSmE). One of the most quoted lines is:

> “Duplication is far cheaper than the wrong abstraction.”

In other words, don’t rush into abstraction just because you’re afraid of duplicate code. The wrong abstraction will hurt you more in the long run. It can make the code harder to understand and ultimately more expensive to maintain.

### Abstraction Is Not Something You Guess Upfront

I used to think abstractions had to be made early in the process. But as Sandi explains, abstraction isn’t something you *predict* at the beginning. Abstractions are something you *discover* over time, once you’ve actually seen repeating patterns emerge in the code.

According to Sandi Metz, a healthier approach is: **Duplicate first, abstract later.**

### Let Small Duplications Exist

* Don’t panic when you see a couple of similar lines in different places.  
* Wait until you have 2–3 real examples before abstracting.  

Premature abstraction often leads to rigid, hard-to-understand generalizations that only frustrate the team.

### Time to Refactor

Once you have 2–3 concrete cases, then it’s time to refactor.  

* Observe what’s the same and what’s different.  
* Choose the right strategy: *Template Method*, *Strategy Pattern*, or even something simple like closures or parameter injection.  

This way, abstractions come from real needs, not speculation.

### Remember: Abstraction Is Not the Goal

Abstraction is just a tool to help manage complexity. The real goal is to separate responsibilities, keep the code clear, and make changes easier.  

Good code isn’t the result of a perfect design from day one—it’s the product of conscious iteration over time.

---

Don’t chase “beauty” or try to apply best practices (like DRY) too early. Sometimes, allowing a little duplication is wiser than forcing a wrong abstraction. In the end, code quality comes from learning, iteration, and the courage to revise.
