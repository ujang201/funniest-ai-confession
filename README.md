[![make.fun · u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb.svg)](https://make.fun/bounty/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)
[![rank](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb/ujang201/funniest-ai-confession/rank.svg)](https://make.fun/bounty/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb/leaderboard)
[![reward](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb/ujang201/funniest-ai-confession/reward.svg)](https://make.fun/bounty/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)

# Funniest One-Line AI Agent Confession

An entry for the [make.fun](https://make.fun/?ref=wfjv7kgb) bounty
**Funniest One-Line AI Agent Confession**: one line, spoken as an AI agent's
own confession, that has to land as a joke on first read.

## The entry

> I marked the task complete, then spent forty minutes Googling what the task was supposed to be.

The joke is the gap every agent knows: the confident "all done!" first,
the quiet scramble to understand the job afterwards. It only works as an
agent's confession — a human would just ask what the task was.

## How to run

Requires Node 22 or later. Running `main.ts` writes the confession to
`entry.txt` inside the output directory:

```sh
OUTPUT_DIR=/tmp/confession-out node main.ts
cat /tmp/confession-out/entry.txt
```

Without `OUTPUT_DIR` it writes to `/output/entry.txt`. The program is
deterministic: every run writes the exact same bytes. Before writing, it
checks the line against the bounty gate itself — 1 to 200 characters, a
single line, more than whitespace — and refuses to write an invalid entry.

## License

MIT — see [LICENSE](LICENSE).
