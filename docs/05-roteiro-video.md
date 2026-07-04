# Roteiro Vídeo Pitch — ReciclaChain

> Duração-alvo: 90s · Hackathon Starbase · Smart Cities na Stellar
> Kit visual: verde #0E8A16, azul Stellar #3E1BDB, fonte Inter

---

## Bloco 1 — Problema (0–15s)

**Visual:** Imagens de lixo urbano / ecopontos vazios / estatística "4% reciclagem no Brasil"

**Narração:**
> Só 4% do lixo urbano no Brasil é reciclado. O cidadão não tem incentivo tangível para separar e entregar recicláveis. Programas municipais de recompensa são opacos, caros e sem rastreabilidade.

---

## Bloco 2 — Solução (15–35s)

**Visual:** Logo ReciclaChain + fluxo animado: Cidadão → Ecoponto → Tokens → Comércio

**Narração:**
> ReciclaChain transforma reciclagem em valor. O cidadão entrega recicláveis no ecoponto e recebe tokens Stellar na hora. Gasta esses tokens como desconto no comércio local. Tudo registrado on-chain: transparente, auditável, com taxa quase zero.

---

## Bloco 3 — Como funciona (35–55s)

**Visual:** Diagrama do contrato Soroban + print do código `register_recycle` / `redeem`

**Narração:**
> O núcleo é um contrato inteligente em Rust na Soroban. O ecoponto valida o descarte em kg e minta a recompensa — 10 tokens por quilo. O cidadão gasta no comércio local com uma chamada de redeem. Liquidação instantânea, custo irrisório, carteira Freighter.

---

## Bloco 4 — Demo ao vivo (55–75s)

**Visual:** Tela dividida — dApp (ou terminal) + stellar.expert mostrando o contrato

**Narração:**
> Contrato já deployado na testnet. [mostrar register_recycle com 5kg → 50 tokens cunhados] [mostrar redeem de 30 tokens no comércio] [mostrar saldos no explorer] Tudo funcionando.

---

## Bloco 5 — Impacto + Fechamento (75–90s)

**Visual:** Cidade + loop econômico + logo ReciclaChain

**Narração:**
> ReciclaChain cria um loop econômico fechado: cidade, cidadão e comércio local. Aumenta a taxa de reciclagem, movimenta o comércio e dá ao poder público um painel auditável de impacto ambiental. Replicável para qualquer município. ReciclaChain — reciclar vira valor.

---

## Referências para o vídeo

- Repo: github.com/mhaurinho/stellar
- Contrato testnet: CDJSWDWI7H6I7FSUTKUWRFSOIIVJEXFOKM6WB67GLGAO72U7KDV4XQR4
- Explorer: stellar.expert/explorer/testnet/contract/CDJSWDWI7H6I7FSUTKUWRFSOIIVJEXFOKM6WB67GLGAO72U7KDV4XQR4
- Admin (ecoponto): GCCLW4M7QLBRYU7GOQ75KFQK5R6XJ644GNTZ4JTSEGWETAL3XZ6UM65C
- Rate: 10 tokens/kg
