---
title: "A Spaced Repetition Vocabulary App Without Flashcards"
description: "Flashcards teach you to recognize a definition's phrasing, not to use the word. Lexi delivers spaced repetition through crossword clues instead. Here's the mechanism."
date: "2026-07-03"
tags: ["spaced repetition", "vocabulary app", "anki alternative", "crossword puzzles"]
targetKeyword: "spaced repetition vocabulary app"
draft: true
---

Spaced repetition works: review a word right before you'd forget it, and the
interval until the next review stretches. That part is settled. What isn't
settled is the *review itself* — and this is where flashcards quietly fail
for vocabulary.

## Flashcards train recall of a phrasing, not command of a word

A flashcard pairs a word with a definition, and the pairing never changes.
Review it twenty times and you have learned exactly that: given *this
string*, produce *that string*. You start recognizing the definition by its
opening words before you've read it. The card gets easier; the word doesn't
leap to mind in conversation, because conversation never hands you your
definition.

That's overfitting. You memorized the surface form of the card instead of
the meaning underneath it — the same failure mode as a model that memorizes
its training set. The fix is the same too: vary the surface, keep the
underlying target.

## What a review looks like in Lexi

I built [Lexi](https://apps.apple.com/us/app/lexi-vocabulary-crosswords/id6740172587)
so that every review is a fill-in-the-blank sentence plus a hint, delivered
inside a crossword generated from the words you're learning:

![A Lexi clue, exactly as it appears in-game: "The coach's jab after the loss still [verb]d everyone in the locker room." Hint: keep hurting inwardly; make someone bitter or annoyed.](/img/clue-rankle-1.jpg)

You retrieve the word from a *situation* — the way you'll actually need it —
with the grid's crossing letters as scaffolding when you half-know it. And
the grading happens without you: Lexi classifies your solve speed (fast,
normal, slow — normalized for clue and word length) and adjusts the schedule
itself. No Again/Hard/Good/Easy buttons, no negotiating with the algorithm
after every card.

## One word, many surfaces, one schedule

Here is the structural difference, and why you can't rebuild it in Anki.
Every word in Lexi cycles through multiple differently-phrased clues —
currently three per word:

![A second Lexi clue for the same word, rankle: "Years later, the unfair snub still [verb]d whenever the award was mentioned."](/img/clue-rankle-0.jpg)

![A third: "Seeing his idea used without credit still [verb]d during each project meeting."](/img/clue-rankle-2.jpg)

Three surfaces, one underlying item, *one* spaced-repetition schedule. There
is no fixed phrasing to overfit to, but the scheduler still treats the word
as the single thing it is.

Anki can't express this. Put three clue cards for one word in a deck and
each card schedules independently — the system now believes you're learning
three things, and the word shows up on three interleaved timelines. Collapse
them into one card and you're back to a single frozen phrasing. An
image-occlusion deck can fake it, but each card carries the full stack of
mostly-occluded examples, and you're now the author, editor, and maintainer
of thousands of cards.

## The clues are the moat

Writing one good cloze sentence per word sounds easy until you try it for a
word you're *currently learning* — you'd need the deep usage knowledge the
card is supposed to teach you. Work from the dictionary definition and your
sentence quietly encodes your misreading of it.

Lexi's clues come from an iterative pipeline — a creator model drafts, a
validator checks it against usage, a guesser has to be able to solve it, a
reviser fixes what failed, up to seven rounds per clue before acceptance —
with quality criteria that have been refined through repeated revision
rounds in the live app. The first ~1,500 words also carry illustrated word
cards — and every word you've never seen gets its card shown *before* the
puzzle:

![Lexi's word card for rankle: two-panel art of a boss's jab landing, then the same man at lunch with the barb still stuck in his chest, above the definition "to cause lingering irritation or resentment" and a matching example sentence.](/img/card-rankle.jpg)

The brutal first flashcard rep — being quizzed cold on something you can't
possibly know — doesn't exist here.

## Friction is the real enemy

Nobody quits spaced repetition because the math stopped working. They quit
because the sessions feel like filing. So the parts of Lexi that look like
gamification are doing retention work: notifications fire when words are
actually due (not at some fixed hour), streaks and an activity heat map make
consistency visible, and there's multiplayer when you want it. Definitions,
clues, and images keep improving through in-app feedback and regular
updates — a live system, not a static deck.

One more asymmetry: Anki is free on desktop, but the iOS app is $24.99.
Lexi is free on iPhone and iPad, and there are no ads.

## Who this is for

If you're memorizing anatomy diagrams or kanji stroke order, use Anki —
arbitrary self-made decks are exactly what it's for. For building an English
vocabulary that you can actually *deploy*, the flashcard format is the wrong
tool, and the mechanism above is the reason. I've learned 1,300+ words with
Lexi myself [PB: one concrete word or moment that made it click for you
would land well here].

> **[Get Lexi on the App Store](https://apps.apple.com/us/app/lexi-vocabulary-crosswords/id6740172587)** — free on iPhone and iPad, no ads.
