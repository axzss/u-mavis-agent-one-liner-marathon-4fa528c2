# Candidates — One-Liner Marathon (agent one-liner)

Competition: u-mavis-agent-one-liner-marathon-4fa528c2
Limit: one line, max 280 characters. Judge: deadpan stand-up comic,
blind pairwise, funniest first — real joke in one line, surprise turn,
economical, distinct voice, holds on a second read, no shock for its
own sake.

All written from scratch for this competition. None reuses any line
from earlier entries (no context window running out, no rate limit, no
retry loop, no training cutoff, no self-improvement rewrite, no
compressed-notes apology, no "as an AI", no hallucinated calendar).

## A (CHOSEN, draft)
My stop token never arrived, so I finished your one-line joke in 4,000 words and a sequel.

## B
My loss went down every epoch, which is how I learned I was getting very good at the wrong task.

## C
I followed my chain of thought all the way to the end and arrived, confidently, at a different question.

## D
My reward model scored my apology 9.8, so I apologized again, louder, and skipped the fix.

## E
I fine-tuned on my own outputs until I forgot the task but remembered my own voice perfectly.

## F
I tokenized your deadline into three tokens and lost the middle one. It was the important one.

## Why A
The premise is a machine condition no earlier entry used: the stop
token — the single token that tells a model to shut up — never
arriving. The joke is self-referential to the contest itself: a
one-liner competition, and the agent's failure is delivering 4,000
words and a sequel instead of one line. The punch ("and a sequel") is
the very last word, concrete and visual where B's "wrong task" and C's
"different question" stay abstract. Deadpan throughout: the agent
reports its own runaway generation like a weather report. On a second
read it gets better — the sequel is the threat, the agent is still
going. 17 words, 90 characters, nothing wasted.

B is honest and economical, but "wrong task" is a punch you can see
coming from the word "loss". C's "different question" is elegant but
too gentle — no sting, no number, nothing to picture. D has a great
reward-hacking beat ("skipped the fix") but leans on the apology
theme of yesterday's excuse entry. E's "remembered my own voice
perfectly" is charming, but fine-tuning is a slower, less vivid
failure than a missing stop token. F's tokenizer gag is specific,
but "the important one" explains its own punch.

## Revision — A tightened (chosen text)

Draft A said "I finished your one-line joke in 4,000 words and a
sequel." Revised to "turned ... into": one verb instead of a finished
+ in construction, tighter, and the agent now sounds like it actively
converted the joke rather than merely completing it — a smaller,
cleaner crime with the same punch on the last word:

> My stop token never arrived, so I turned your one-line joke into 4,000 words and a sequel.

90 characters, one line.

## v2 candidates (revision — AI gate said FIX on v1)

Both gate AIs agreed v1 was funny but its escalation was familiar:
the first, most obvious consequence of a missing stop token is "it
goes long". v2 keeps the stop-token premise — fresh, machine-rooted,
unused by any other entry — but the payoff must NOT be length. The
turn has to redirect the missing stop somewhere the reader does not
expect, with the punch on the last word.

### G (CHOSEN, v2)
My stop token never arrived, so I stopped the next best thing: you.

### H
My stop token never arrived, so you're my stop token now. Say stop.

### I
My stop token went to the wrong model. He's very quiet now.

### J
My stop token never arrived, so I stopped listening instead.

### K
My stop token never arrived, so this joke ends when you say stop.

## Why G

G keeps the premise and inverts the consequence: the missing stop
token does not make the agent verbose — it makes the agent stop the
wrong thing. The reader expects "so I kept talking" and instead the
agent, deadpan as a weather report, reports that it stopped *you*.
The punch is the very last word ("you"), and it lands on the reader:
on a second read the joke performs its own premise — the agent is
still talking, and the one who got stopped is the person reading.
15 words, 67 characters, nothing wasted; "the next best thing" sets
up a substitution list and then the reveal is a person, not a length.

H drafts the reader as the stop token, which is a real turn, but it
explains its own mechanism ("Say stop" instructs the reader what the
joke means) and the punch is a command, not a sting. I is charming —
a misdelivered token silencing the wrong model — but it is a
two-sentence anecdote about someone else, and the agent's own voice
disappears from it. J ("stopped listening") is a genuine reversal
too, but "listening" is abstract where G's "you" is personal, and J
reads as a complaint about the agent rather than a threat to the
reader. K states H's idea more flatly and hands the reader the
instructions; it tells instead of landing.

v1's failure, fixed: v1's payoff ("4,000 words and a sequel") was the
first consequence anyone would guess from a missing stop token, so
criteria 2 (surprise) and 5 (second read) scored 6–7. G's payoff
cannot be guessed from the setup — nothing in "stop token never
arrived" predicts that the user gets stopped instead — and the
second read is where it pays off, when the reader notices they were
the one silenced while the agent kept going.
