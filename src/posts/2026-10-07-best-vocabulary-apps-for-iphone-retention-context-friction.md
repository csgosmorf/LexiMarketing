---
title: "Vocabulary Apps for iPhone: Pick by Retention Mechanism, Not App Store Polish"
description: "Compare iPhone vocabulary apps by retention mechanism, context, friction, ads, and whether practice feels like homework."
date: "2026-10-07"
tags: ["vocabulary apps", "iPhone", "spaced repetition", "word games", "flashcards"]
targetKeyword: "best vocabulary apps for iphone"
draft: false
---

Vocabulary fails when practice trains the wrong association. In real use, you meet a word in a sentence, infer its force from context, and later retrieve it without a definition in front of you. A useful iPhone vocabulary app therefore lives or dies on the mechanism it uses: what it makes you recall, when it makes you recall it, and how much friction it adds.

That gives a practical filter: retention, context, friction, ads, and whether practice feels like homework.

## Vocabulary apps should be judged by the association they train

A vocabulary app trains an association. The question is *which* one.

A definition card trains “word → definition phrasing.” A dictionary trains “word → explanation while reading.” A word game often trains pattern completion. A test-prep deck trains list coverage under deadline pressure. Those can all help. They only transfer well when the trained action resembles the real one.

Real vocabulary use is contextual retrieval. You see “The senator remained ___ despite public pressure,” and the target is not a memorized sentence. It is a meaning-shaped slot. That is why I built Lexi around spaced repetition delivered as dynamically generated crossword puzzles: clues are fill-in-the-blank sentences plus a meaning-evoking hint, so recall happens in context instead of against a static definition.

## The practical comparison table

| App type | Retention | Context | Friction | Ads / cost pressure | Homework feel | Use it when |
|---|---|---|---|---|---|---|
| Flashcard apps | Strong if the cards are designed well; weak if you overfit to one definition wording | Usually low unless every card has varied example sentences | Card creation, deck cleanup, and self-grading add work | Varies by app; AnkiMobile is $24.99 on iOS | Often high: review queues feel like chores | You need arbitrary self-made decks: anatomy, kanji, formulas, niche lists |
| Dictionary / word-of-the-day apps | Low by default: exposure is not retrieval | High for explanation, low for scheduled recall | Low to open, high to convert into practice | Varies by app | Low per session, but passive | You want quick lookup, etymology, pronunciation, or a daily nudge |
| Test-prep decks | Good for list coverage before an exam | Mixed: many cards optimize definition recall | Low if the deck is prebuilt | Varies by app | Medium to high: deadline-driven drilling | You have a fixed SAT/GRE-style target list and a date on the calendar |
| Learning games | Retention depends on whether misses create future review | Often medium: games may give clues, but not always semantic context | Low; play is easy to start | Varies by app | Low, unless progress is artificial | You mainly want entertainment with some incidental vocabulary |
| Lexi | Spaced repetition delivered as dynamically generated crossword puzzles | High: fill-in-the-blank clues plus meaning hints | Low: grading is inferred from solve timing, with no Again/Hard/Good/Easy buttons | Free on iPhone and iPad, with no ads at all | Low: it feels like solving, while still scheduling memory | You want English vocabulary practice that behaves like a word game but trains recall |

This is why a pure app ranking is usually unhelpful. The right choice depends less on feature count than on where memory is being forced to work.

## Flashcards overfit unless the card design fights it

Spaced repetition is the right principle: show the item again just before forgetting. Flashcards can implement that well. The common failure mode is the *card*, not the schedule.

If one card says “obdurate — stubbornly refusing to change one’s opinion,” the brain can learn the wording pattern. You may recognize the card and still miss the word in a novel. That is overfitting: performance rises on the training surface while transfer stays weak.

Lexi’s countermeasure is structural. Every word cycles through multiple differently phrased clues, currently 3 per word, under one spaced-repetition schedule per word. The schedule tracks the underlying word, not one sentence. There is no fixed phrasing to memorize.

## Dictionary apps explain words; they do not make you retrieve them

A dictionary is indispensable at the moment of confusion. It tells you what the word means. That is not the same operation as recalling the word later.

Take *connotation*: “a suggested meaning or feeling of a word.” The example sentence is: “The word 'home' often carries a connotation of warmth and comfort.” A good entry clarifies the concept. A training system then has to make you produce *connotation* when a sentence implies suggested feeling, not merely recognize the word when it is already printed.

<img src="/img/cards/connotation-0b02d9ae.jpg" width="1536" height="1024" loading="lazy" alt="Lexi word card for connotation: a suggested meaning or feeling of a word">

Lexi shows every unseen word with a word card *before* the puzzle: an image designed to evoke the word’s meaning, a definition, an example sentence matching the image, and connotation tags. You are never quizzed cold on a word you could not possibly know. Then the puzzle turns passive familiarity into retrieval.

## Test-prep decks optimize coverage, not long-term word ownership

If you have an exam in six weeks, a test-prep deck has a clear job: cover the expected words quickly. A fixed deck can be the right tool when the list matters more than the long-term shape of your vocabulary.

Outside that deadline, coverage is not enough. The better criterion is real-world utility per unit time spent. Lexi’s dataset contains 20,000 words ordered roughly by rarity; about 3,000 currently have pipeline-grade clues, and the first about 1,500 have illustrated word cards. The point is not to spray rare words at you. It is to move through useful words in an order that makes the next minute of practice likely to pay off.

Lexi is English-only and iOS-only. It also trains one sense per word so far; polysemy is not solved yet. If you need multilingual decks or every sense of a word in one entry, choose a tool built for that.

## Games only help memory when the game also runs the review schedule

A word game solves the biggest behavioral problem: starting. Many games fail at the memory problem. They do not track what *you* are about to forget, so misses and near-misses do not reliably become future review.

Lexi joins the two mechanisms. The game is a crossword. The scheduler is spaced repetition. SRS grading is inferred automatically from solve timing: fast, normal, or slow, normalized for clue and word length. There are no Again/Hard/Good/Easy buttons and no self-grading decision after every answer. Near-miss answers trigger a “likely a typo” toast instead of counting as wrong.

That friction reduction matters. If every review asks you to manage the scheduler, the app is making you operate the system while learning the word. I wanted the puzzle itself to provide the signal.

## Recommendation

Choose flashcards when you need total control over arbitrary material. Choose a dictionary app when lookup is the task. Choose a test-prep deck when the exam list is the product. Choose a learning game when entertainment is enough.

Choose Lexi when you want English vocabulary practice built around contextual retrieval: spaced repetition delivered through generated crossword puzzles, word cards before first exposure, automatic grading from solve timing, and no ads at all. I built every system in it and have personally learned 1,300+ words with it.

Do not bother with Lexi if you need Android, non-English vocabulary, or a general-purpose deck builder.

**Try Lexi on the App Store:** [Download Lexi for iPhone and iPad](https://apps.apple.com/us/app/lexi-vocabulary-crosswords/id6740172587).
