# Pitch Deck — ReciclaChain

> Conteúdo dos slides (10 slides). Montar no Canva/Slides depois com o kit visual
> (verde #0E8A16, azul Stellar #3E1BDB, fonte Inter). 1 ideia por slide.

## Slide 1 — Capa
- **ReciclaChain**
- Tagline: *"Reciclar vira valor na sua cidade"*
- Starbase Hackathon · Smart Cities na Stellar · [nome do time]

## Slide 2 — O problema
- Só ~4% do lixo urbano no Brasil é reciclado.
- Falta **incentivo tangível e imediato** para o cidadão separar e entregar recicláveis.
- Programas municipais de recompensa são opacos, caros de operar e sem rastreabilidade.

## Slide 3 — A solução
- Cidadão entrega recicláveis no ecoponto → recebe **tokens Stellar** na hora.
- Gasta os tokens como **desconto no comércio local**.
- Tudo registrado on-chain: transparente, auditável, taxa quase zero.

## Slide 4 — Como funciona (fluxo)
```
Cidadão → Ecoponto valida kg → register_recycle() → tokens mintados
Cidadão → Comércio → redeem() → desconto aplicado
```
- 3 atores: **Cidadão · Ecoponto · Comércio**.

## Slide 5 — Por que Stellar (integração estrutural)
- Contrato **Soroban** (Rust) como núcleo da lógica de recompensa: `register_recycle` / `redeem`.
- Custo de transação irrisório (viável para micro-recompensas urbanas).
- Liquidação instantânea + carteira Freighter.
- **Já deployado e funcionando na testnet** (contract id no explorer).

## Slide 6 — Demo
- Print/GIF do dApp: saldo do cidadão, registro de descarte no ecoponto, resgate no comércio.
- Link do contrato no stellar.expert (prova de deploy).

## Slide 7 — Impacto (smart city)
- Aumenta taxa de reciclagem via incentivo econômico direto.
- Movimenta o **comércio local** (tokens só circulam na cidade).
- Dá ao poder público um **painel auditável** de impacto ambiental (kg reciclados on-chain).

## Slide 8 — Diferencial
- Não é app de pontos fechado: é **valor programável e transparente** na blockchain.
- Loop econômico fechado cidade↔cidadão↔comércio.
- Replicável para qualquer município (multi-tenant por ecoponto/admin).

## Slide 9 — Roadmap
- MVP (hoje): contrato testnet + dApp 3 telas.
- Próximo: mainnet, app mobile, integração com balanças dos ecopontos, parceria com prefeituras da Baixada Santista.
- Visão: marketplace de recompensas + créditos de carbono.

## Slide 10 — Fechamento
- **ReciclaChain — reciclar vira valor.**
- Repo: github.com/mhaurinho/stellar · Contrato testnet: CDJSWDWI...V4XQR4
- [nomes/contato do time]
