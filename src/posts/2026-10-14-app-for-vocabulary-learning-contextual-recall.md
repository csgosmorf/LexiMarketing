---
title: "A Vocabulary App Should Train Recall in Context"
description: "Choose a vocabulary app by mechanism: contextual recall, spaced repetition at the word level, varied prompts, low friction, and no ads."
date: "2026-10-14"
tags: ["vocabulary app", "learn vocabulary", "spaced repetition", "iPhone apps", "vocabulary learning"]
targetKeyword: "app for vocabulary learning"
draft: false
---

A word is not learned when you can admire its definition on a card. It is learned when, days later, a sentence creates semantic pressure and your memory supplies the word. Any app for vocabulary learning should be judged by how directly it trains that event.

Daily-word feeds, pretty flashcards, and synonym quizzes can all produce familiarity. Familiarity is cheap. The hard part is recall: producing the word when the context calls for it. I wrote about that failure mode in [why you recognize a word but can’t find it when you need it](/posts/2026-09-29-recognize-a-word-cant-recall-it/); app selection should start there, not with screenshots.

## A useful app for vocabulary learning trains contextual recall

The target behavior is not reciting a definition. The target behavior is seeing a sentence-shaped gap and retrieving the exact word that belongs there.

That is why Lexi’s clues are fill-in-the-blank sentences plus a meaning-evoking hint. The crossword answer must be typed into context. If the word is *obdurate*, the useful skill is not recognizing “stubbornly refusing to change one’s mind”; it is producing *obdurate* when a character, policy, or habit has that quality.

This difference matters because recognition can pass while recall fails. Multiple-choice and flip-card review let the answer sit nearby. Crossword recall removes that crutch: the clue supplies meaning and syntax, but the word has to come from memory.

## Spaced repetition must schedule the word, not the card

Spaced repetition—review at expanding intervals as memory strengthens—is necessary but not sufficient. If the scheduled item is one fixed flashcard, you can learn the card’s phrasing instead of the word.

Lexi uses one spaced-repetition schedule per word while rotating multiple differently phrased clues for that word, currently 3 per word. Same underlying item; different surface forms. That blocks a common overfitting pattern: remembering that one clue with that one cadence points to that one answer.

This is the central difference from flashcard churn. A flashcard often asks only whether you remember what was on the other side. A vocabulary app should ask whether you can retrieve the word across contexts. For a deeper version of the same mechanism, see [a spaced repetition vocabulary app without flashcards](/posts/2026-07-03-spaced-repetition-vocabulary-app-without-flashcards/).

## Cold quizzes waste attempts

A test is useful only after the learner has been given something to retrieve. Quizzing a word you could not possibly know is not rigor; it is noise.

Every Lexi word you have never seen gets a word-card introduction before the puzzle. Word cards are styled like collectible game cards: an image designed to evoke the word’s meaning, a definition, an example sentence matching the image, and connotation tags. The first ~1,500 words have illustrated word cards; ~3,000 words currently have pipeline-grade clues.

That order is deliberate: encode first, retrieve second. The puzzle should test memory, not clairvoyance.

## Prompt quality is a product system, not a writing mood

Bad clues train bad associations. A clue that is too vague turns vocabulary into guessing. A clue that merely paraphrases the definition trains definition-recognition. A clue that gives the answer away trains nothing.

I built Lexi’s clue pipeline as an iterative Creator → Validator → Guesser → Reviser system using frontier language models. A clue can undergo up to 7 revisions before acceptance, against quality criteria refined through repeated in-app revision rounds. That machinery exists because vocabulary learning depends on the *cue*. If the cue is sloppy, the schedule cannot save it.

## Friction is part of the learning algorithm

In button-graded SRS, you answer, then grade your own answer. That creates a second task layered over the real task. You solve, then audit yourself, then decide how harsh to be.

Lexi infers SRS grading automatically from solve timing: fast, normal, or slow, normalized for clue and word length. No self-grading buttons. The schedule updates from behavior you already produced while solving.

Low friction is not cosmetic. Every extra decision competes with retrieval. A vocabulary app should spend attention on words, not review administration.

## Ads corrupt the session boundary

Vocabulary practice works best as a tight loop: cue, retrieval, feedback, next cue. Ad interruptions cut that loop for reasons unrelated to memory.

Lexi is free on iPhone and iPad with no ads at all. No ad-removal purchase exists because there is nothing to remove. If a learning app needs attention for vocabulary, it should not spend the same session selling that attention to someone else.

## The buyer’s checklist

| Selection question | Reject this signal | Prefer this mechanism | Lexi’s implementation |
|---|---|---|---|
| Does it train recall? | Definitions you can reread or recognize | Typed answers prompted by meaning and context | Fill-in-the-blank crossword clues plus meaning-evoking hints |
| Does spacing adapt? | Fixed daily lists | A spaced-repetition schedule tied to memory strength | Spaced repetition delivered through dynamically generated crossword puzzles |
| Does it vary prompts? | One card, one phrasing | Multiple cues for the same underlying word | 3 differently phrased clues per word under one schedule |
| Does it introduce before testing? | Cold quizzes on unknown words | Encoding before retrieval | Word-card introductions before puzzles |
| Does review create admin work? | Manual self-grading after every answer | Schedule updates inferred from behavior | Timing-based SRS grading, normalized for clue and word length |
| Does it interrupt? | Ads inside study sessions | No ad-driven breaks | Free on iPhone and iPad with no ads |

## Who Lexi is for

Lexi is for people who want vocabulary to become usable, not merely familiar.

— Advanced ESL learners who already read English but want more precise production.

— Logophiles who meet words in books and want a system that makes them stick.

— Flashcard users who like spaced repetition but dislike card maintenance and self-grading.

— Word-game players who want puzzle time to train memory, not just pass time.

The dataset contains 20,000 words ordered roughly by rarity, aiming for maximal real-world utility per unit time spent. Lexi is made by a solo developer; I designed every system in it and have personally learned 1,300+ words with it.

If you want Android, languages other than English, multiple senses per word, or illustrated word cards far beyond the first ~1,500 words, don’t bother yet.

**Try Lexi:** If you want contextual recall, spaced repetition at the word level, varied prompts, and no ads, download [Lexi on the App Store](https://apps.apple.com/us/app/lexi-vocabulary-crosswords/id6740172587).
