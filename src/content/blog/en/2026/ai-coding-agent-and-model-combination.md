---
title: 'It’s Not Just the Model. It’s the Combination'
pubDate: 2026-02-25
description: "Comparing AI coding tools isn't just about the model — the agent matters too. My experience testing Copilot, Claude, and Zed with different model backends."
tags: 'notes'
---

Lately I’ve been comparing AI coding tools. But not just models. I’ve been comparing **combinations**:

* Copilot + Sonnet
* Claude Agent + Sonnet / Opus
* Zed Agent + Sonnet
* Zed Agent + GPT

Additional from some friends
* Codex + GPT
* Antigravity + Gemini

Same model, different agent.
Same agent, different model.

The experience changes dramatically.

That’s when I realized:
The real variable isn’t the model alone.

It’s the stack.

---

## The Three Layers of AI Coding

Modern AI coding has three layers:

**IDE** – where you work (sometimes bundled with coding agent)  
**Agent** – how tasks are orchestrated  
**Model** – how reasoning happens  

Most comparisons online collapse these into one.

They shouldn’t.

You can run:

* Sonnet inside Copilot
* Sonnet inside Claude Agent
* Sonnet inside Zed Agent

Same model.
Different experience.

Because the agent layer changes:

* how context is selected
* how much autonomy is allowed
* how bold refactors are
* how patches are applied

---

## What I Observed

### Claude Agent + Sonnet / Opus

Best for:

* Large refactors
* Architectural shifts
* Complex reasoning
* Big chunk work

It’s bold.
It assumes you want improvement at system level.

But:

* It’s more expensive.
* It can over-engineer if you don’t constrain it.

This feels like hiring a senior engineer.

---

### Copilot + GPT or Sonnet

Good for:

* Fast iteration
* Inline suggestions
* Small changes

It’s lighter.
More incremental.
Less autonomous.

Feels like an assistant sitting beside you.

---

### Codex + GPT (from a friend’s experience)

My friend says Codex + GPT gives:

* Better structured code than Copilot + GPT
* Cheaper cost
* More practical output

That combination seems optimized for:

* Focused implementation
* Direct tasks
* Less overthinking

Good if you want cost efficiency and solid results.

---

### Antigravity + Gemini (from scratch projects)

Another friend prefers Antigravity + Gemini when:

* Starting greenfield projects
* Generating initial scaffolding
* Rapid prototyping

Apparently it handles blank-slate work well.

Different tools shine at different phases.

---

## The Real Variables

After experimenting and talking with friends, I see four key variables:

### 1. Task Type

* Big architectural change?
* Focused feature?
* Bug fix?
* From scratch project?

### 2. Expected Output Style

* Big chunk rewrite?
* Step-by-step iteration?
* Conservative edits?
* Bold redesign?

### 3. Agent Behavior

* Minimal orchestration (autocomplete style)?
* Planning-driven multi-file edits?
* Tool-heavy automation?

### 4. Cost Model

* API pay-as-you-go?
* Monthly subscription?
* Enterprise routing?

Different combinations optimize different tradeoffs.

---

## API Tokens vs Subscription

Personally, I usually start with API tokens.

Why?

Because it’s frictionless to experiment:

* Easy with Zed
* Easy from terminal
* Top up $5–10
* Try different models
* Feel the behavior

API mode is perfect for exploration.

But for long-term daily use?

It gets expensive.

Agent workflows consume:

* Planning tokens
* Context tokens
* Tool calls

If you’re coding every day, subscription often becomes cheaper.

After testing and comparing, some of my friends ended up with monthly subscriptions because:

* They code daily
* They don’t want token anxiety
* Predictable cost reduces friction

So the pattern becomes:

API first → explore  
Subscription later → commit

---

## The Bigger Realization

People don’t prefer tools. They prefer combinations.  

Some developers want:

* Safe incremental suggestions.

Others want:

* Aggressive system-level rewrites.

Some optimize for:

* Lowest cost.

Others optimize for:

* Strongest reasoning.

There is no universal “best AI coding tool.”

There is only:

* The stack that fits your task
* The agent that matches your working style
* The model that aligns with your expectations
* The pricing model that matches your usage pattern

---

## Where I Land (For Now)

I no longer ask:

“Which model is best?”

I ask:

* What task am I doing?
* How much autonomy do I want?
* Am I optimizing for cost or capability?
* Is this exploration or daily production work?

Because in AI coding, the real decision isn’t model vs model.

It’s agent + model + pricing + workflow.

And once you see that, comparisons get much more practical — and much less emotional.
