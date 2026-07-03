---
title: "A Spaced Repetition Vocabulary App Without Flashcards"
description: "Spaced repetition for vocabulary does not have to mean self-graded flashcards. Here\u2019s how SRS works and why Lexi uses crossword reviews instead."
date: "2026-07-03"
tags: ["spaced repetition", "vocabulary app", "flashcard alternative", "crossword puzzles", "language learning"]
targetKeyword: "spaced repetition vocabulary app"
draft: true
---

If you searched for a spaced repetition vocabulary app, you probably already know the basic promise: review a word right before you forget it. That part is useful. The annoying part is that the classic SRS workflow often means staring at a stack of cards and deciding how well you knew each one.

I built Lexi because I wanted the scheduling without the flashcard chores. It teaches vocabulary through spaced repetition delivered as dynamically generated crossword puzzles, so review still happens on a schedule, but the act of recall feels more like solving than filing.

## What does spaced repetition actually mean?

[Spaced repetition](https://en.wikipedia.org/wiki/Spaced_repetition) is a review system that changes timing based on memory.

If you recall a word easily, the next review moves farther into the future. If you struggle, it comes back sooner. That is the whole idea. The app is trying to spend your attention where it has the highest chance of helping.

A lot of SRS apps expose this through flashcard grading. You see a prompt, reveal the answer, then choose something like Again, Hard, Good, or Easy. [Anki’s manual](https://docs.ankiweb.net/studying.html) describes that review loop clearly, and Anki is excellent if you want control over decks, card types, and scheduling behavior.

For vocabulary, though, there is a second question: what should the review feel like?

A word is more than a definition to recognize. You need to retrieve it from a clue, connect it to a situation, notice its tone, and distinguish it from near-synonyms. Flashcards can do some of that if you build good cards. But building good cards is work, and reviewing them can still feel flat.

## Why self-graded flashcards can get tiring

Self-graded cards ask you to make two decisions every time: what is the answer, and how well did I know it?

That second decision sounds small. It is not always small in practice. Did you know the word, or did the example sentence give it away? Did you hesitate because the word is weak, or because you were distracted? Should that be Good or Hard? If you care about the system, you can end up managing the system.

The SRS math may be fine and the habit can still die. The review mode feels dull, the backlog grows, and the daily session starts to feel like debt.

Quizlet is good for quick study sets and familiar flashcard practice. Its [flashcards feature](https://quizlet.com/features/flashcards) is built around the term-and-answer format, which is exactly what many learners want for class material. But if you are learning vocabulary for reading, writing, or general curiosity, you may want the same timing logic without the same card loop.

## A spaced repetition vocabulary app does not have to be a flashcard app

My bet with Lexi is simple: keep the spaced repetition, change the retrieval task.

Instead of showing you a card and asking you to grade yourself, Lexi gives you crossword clues. You still have to retrieve the answer. You still get repeated exposure over time. But you are solving a clue, not flipping a card.

That matters because crossword clues create a little friction in the right place. You have to pull the word from meaning, length, crossing letters, and context. If you know the word, you move quickly. If you partly know it, the grid helps you work it out. If you do not know it, the app still learns something useful from that attempt.

Lexi currently uses a 20,000-word dataset ordered roughly by rarity. About 3,000 words currently have handcrafted-quality AI clues, three per word. The first roughly 1,500 words have illustrated word cards, and those cards are shown before a puzzle for every word you have never seen.

Those numbers are not there to imply the app is finished. They are there because vague feature claims are cheap. The current shape is a large word list, stronger clue coverage in the early and middle range, and illustrated introductions for the first slice of the vocabulary curve.

## How Lexi adjusts reviews without asking you to self-grade

The core difference is automatic review adjustment.

In a self-graded flashcard app, you tell the system how well you remembered. In Lexi, the app watches how you solve. It classifies solve speed as fast, normal, or slow, normalized for clue and word length, then raises or lowers the SRS ease factor.

The ease factor is the number that controls how aggressively review intervals stretch or shrink. Higher ease means the word can wait longer before it appears again. Lower ease means the word needs another pass sooner.

This is not magic. Solve speed is a proxy, and proxies have limits. A crossword answer can be helped by crossing letters. A clue can click late even when you know the word. But for vocabulary practice, I prefer a noisy behavioral signal to constant self-grading. The learner’s job should be recalling the word, not negotiating with a scheduling algorithm.

There are a couple of practical guardrails around this. Near-miss answers trigger a “likely a typo” toast instead of counting as wrong. Optional reminders are scheduled from your actual review backlog, not from fixed times. If you have nothing urgent due, the app does not need to pretend that 7:00 p.m. matters.

## Context is where vocabulary apps usually get thin

A lot of vocabulary practice fails quietly because the word stays isolated.

You can memorize “perspicacious = sharply perceptive” and still not feel comfortable using it. Is it complimentary? Formal? Slightly theatrical? How is it different from astute? Those are the questions that make a word usable.

Lexi’s word cards are styled like collectible game cards. Each one has an evocative image, a definition, an example sentence matching the image, and connotation tags. The goal is to give the word a scene before you have to retrieve it in a puzzle.

There is also synonym nuance inside the app. Tap any two synonyms in a synset and you can read how they differ. The synset nodes are colored and positioned by UMAP embedding proximity, which means related words are arranged by a machine-learning map of semantic closeness. You do not need the math. The practical point is that “similar” does not mean “interchangeable.”

## When a crossword-based SRS app makes sense

A crossword review system is not better for every learner. It fits a specific problem: you believe in spaced repetition, but you do not want your vocabulary habit to feel like admin.

If you get bored by rote flashcard review, want recall practice more than recognition, like word games, and want the timing to adapt without grading every card yourself, this approach makes sense. It is built around retrieval with a little structure and a little resistance, which is often what makes a word stick.

If, on the other hand, you want total control over decks and scheduling, Anki is probably the better tool. That is not a knock on Anki. It is exactly why many people use it. Lexi is taking a different bet: less manual control, more automatic review, and a puzzle format that makes the repetitions easier to keep doing.

I have personally learned 1,300+ words with it, which is the main reason I keep working on it. Not because crosswords are a cute wrapper. Because I wanted a way to keep showing up without making vocabulary practice feel like chores.

## Who this is and is not for

Lexi is for people who want spaced repetition without a pile of cards. It is for people who like the idea of a memory system, but want the daily review to feel closer to solving than sorting.

It is probably not for people who mainly want to hand-tune every review decision. That is a real preference, and there are good tools built around it. Lexi is aimed at the person who wants the scheduling logic, the repeated exposure, and more context around each word, without turning every session into a grading task.

> Try Lexi on the App Store: [Download Lexi Vocabulary Crosswords](https://apps.apple.com/us/app/lexi-vocabulary-crosswords/id6740172587)

Lexi is free to download, with a small one-time purchase to remove ads.
