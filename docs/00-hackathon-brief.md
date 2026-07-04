# Starbase Hackathon — Brief de Ponta a Ponta

> Documento-fonte da verdade. Tudo que precisamos ENTREGAR e COMO seremos julgados.
> Fontes: starbase-hackathon.vercel.app · developers.stellar.org · web-nine-umber-74.vercel.app (stellar-build)

## 1. O que é

Hackathon **Starbase** — construir soluções para **cidades inteligentes (cidades do futuro)** na blockchain **Stellar**.
Organizador: **ILIS** (tem governo entre os stakeholders). Formato 100% online, ~1 semana.

## 2. Tema e escopo

- **Tema 100% ABERTO.** *"Sem framework obrigatório, sem bounty, sem track específica. Apenas construa algo incrível para as cidades do futuro."*
- **Não há desafios travados** — nós escolhemos o problema. Só precisa caber em "smart city na Stellar".

## 3. Datas

| Marco | Data |
|---|---|
| Inscrições abrem | 01/jul |
| X Space (abertura + Q&A) | 02/jul |
| Início | 03/jul |
| **Entrega (deadline)** | **10/jul** |
| Vencedor anunciado | 15/jul |

> Hoje = 04/jul → **~6 dias corridos** até a entrega.

## 4. Elegibilidade

- 18+
- Times de 1 a 2 pessoas
- Foco: região da **Baixada Santista**
- Projetos em qualquer estágio (avaliados no estágio atual)

## 5. Entregáveis OBRIGATÓRIOS

1. **Repositório open-source** (GitHub/GitLab/Bitbucket) com código completo + **README**.
2. **Integração Stellar "significativa e estrutural"** (não cosmética).
3. **Pitch deck** — problema, solução, diferencial, relevância.
4. **Vídeo demo de 1–2 min** mostrando o protótipo FUNCIONANDO.
5. **Deploy em testnet OBRIGATÓRIO** (mainnet ou tração real = pontos extras).

> Sem limites explícitos de tamanho para deck/vídeo além do vídeo de 1–2 min.
> Nenhum starter kit, API ou dataset oficial fornecido.

## 6. Critérios de julgamento

1. Profundidade da integração Stellar + **complexidade técnica**.
2. **Impacto** no ecossistema Stellar.
3. **Relevância** para aplicações de smart cities.
4. **Qualidade** do deploy em testnet/mainnet.

## 7. Prêmio

- **R$ 2.500 em XLM** para o vencedor único (na carteira Stellar). Sem divisão de prêmio.

## 8. Canais

- Grupo de WhatsApp da hackathon (brainstorm com participantes).
- X Space: x.com/i/spaces/1YxNrrdNAdoxw/peek

## 9. Stack Stellar (viabilidade técnica)

- **Soroban** = contratos inteligentes em **Rust**; CLI `stellar`/`soroban` para build + deploy testnet (rápido, <1 dia p/ primeiro contrato).
- **SDKs**: JavaScript e Python (pagamentos, assets, Horizon/RPC).
- **Carteiras**: Freighter + Stellar Wallets Kit.
- **Quickstart oficial**: "Issue an asset or create a custom smart contract token" (bom ponto de partida).
- Acelerador: **stellar-build** (Claude Code + método BMAD; trilha Discover→Architect→Deploy→Apply).

## 10. Como cada critério vira nota (nossa estratégia)

| Critério | Como pontuar alto |
|---|---|
| Complexidade técnica | Contrato Soroban real na testnet, não só pagamento simples |
| Impacto ecossistema | Caso de uso replicável + narrativa de adoção |
| Relevância smart city | Dor urbana concreta + ator institucional (ILIS/governo) |
| Deploy | Testnet funcional no vídeo + link do contrato no explorer |

## 11. Trilha Zero-to-Hero (setup dia 1)

1. Instalar Rust + `stellar` CLI.
2. Criar identidade testnet + fund via friendbot.
3. `stellar contract init` → build → deploy "hello world" na testnet.
4. Conectar Freighter no frontend + invocar contrato.
5. A partir daí, iterar o contrato do MVP escolhido.
