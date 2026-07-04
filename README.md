# ReciclaChain ♻️ — Starbase Hackathon 🚀

Solução para **cidades inteligentes** na blockchain **Stellar**: reciclar vira valor.
Organização: ILIS · Prazo de entrega: **10/jul** · Prêmio: R$ 2.500 em XLM.

> **Proposta escolhida pelo time:** ReciclaChain. O cidadão entrega recicláveis no ecoponto,
> recebe tokens Stellar na hora e gasta como desconto no comércio local. Tudo on-chain, auditável e com taxa quase zero.

## 🔗 Links do projeto

- **Contrato (testnet):** `CDJSWDWI7H6I7FSUTKUWRFSOIIVJEXFOKM6WB67GLGAO72U7KDV4XQR4`
- **Explorer:** https://stellar.expert/explorer/testnet/contract/CDJSWDWI7H6I7FSUTKUWRFSOIIVJEXFOKM6WB67GLGAO72U7KDV4XQR4
- **Admin (ecoponto):** `GCCLW4M7QLBRYU7GOQ75KFQK5R6XJ644GNTZ4JTSEGWETAL3XZ6UM65C`
- **Rate:** 10 tokens/kg

## 🏗️ Como funciona

```
Cidadão → entrega recicláveis no Ecoponto → Ecoponto valida (kg) e minta tokens
Cidadão → gasta tokens (redeem) → Comércio local recebe → desconto aplicado
```

O núcleo é um contrato Soroban (Rust) com três operações principais:

| Função | Quem chama | Efeito |
|---|---|---|
| `register_recycle(to, kg)` | Ecoponto (admin) | minta `kg × rate` tokens pro cidadão |
| `redeem(from, merchant, amount)` | Cidadão | transfere tokens do cidadão pro comércio |
| `balance` / `total_recycled` / `rate` | qualquer um | leitura de saldos e métricas |

## 📁 Estrutura do repositório

```
onchain/     → contrato Soroban (Rust) + testes
frontend/    → dApp Vite/React/TS (Cidadão, Ecoponto, Comércio) + Freighter
docs/        → brief, propostas, ambiente, contrato, pitch deck, roteiro do vídeo
```

## 📚 Documentação

- [`docs/00-hackathon-brief.md`](docs/00-hackathon-brief.md) — o que entregamos e como somos julgados.
- [`docs/01-propostas.md`](docs/01-propostas.md) — as 10 propostas do brainstorm inicial.
- [`docs/02-ambiente.md`](docs/02-ambiente.md) — trilha zero-to-hero: toolchain, testnet, hello-world.
- [`docs/03-contrato.md`](docs/03-contrato.md) — API do RecicToken e fluxo validado on-chain.
- [`docs/04-pitch-deck.md`](docs/04-pitch-deck.md) — pitch deck (10 slides).
- [`docs/05-roteiro-video.md`](docs/05-roteiro-video.md) — roteiro do vídeo (90s).

## 🚀 Rodar localmente

```bash
# contrato
cd onchain && stellar contract build && cargo test

# frontend (precisa da extensão Freighter na testnet)
cd frontend && npm install && npm run dev
```
