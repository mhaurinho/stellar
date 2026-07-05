# Pitch Deck + Roteiro Falado — ReciclaChain

> **Formato:** 10 slides · **Tempo-alvo:** 3 min de fala + 1 min de demo.
> **Kit visual:** verde #22C55E, roxo Stellar #7C5CFF, fundo dark, fonte Inter.
> Regra: 1 ideia por slide, no máx. 6 palavras por linha no slide. O texto abaixo em
> **> citação** é o que se **fala** (não vai no slide).

---

## Slide 1 — Capa (0:00–0:12)

**No slide:**
- **ReciclaChain**
- *Reciclar vira valor na sua cidade*
- Starbase Hackathon · Smart Cities na Stellar · Time Connect 3bros

**Roteiro falado:**
> "E se cada garrafa que você recicla virasse dinheiro no comércio da sua rua? Isso é ReciclaChain."

---

## Slide 2 — O problema (0:12–0:35)

**No slide:**
- **4%** — só isso do lixo urbano é reciclado no Brasil
- Cidadão sem incentivo imediato
- Programas municipais: opacos, caros, sem rastro

**Roteiro falado:**
> "O Brasil recicla só 4% do lixo urbano. Não é falta de vontade — é falta de incentivo tangível na hora. E os programas que existem são caixas-pretas: a prefeitura gasta e não consegue provar o impacto."

---

## Slide 3 — A solução (0:35–0:55)

**No slide:**
- Entrega recicláveis → **tokens na hora**
- Gasta como **desconto no comércio local**
- Tudo **on-chain**: transparente e auditável

**Roteiro falado:**
> "ReciclaChain fecha esse loop. O cidadão entrega recicláveis no ecoponto e recebe tokens Stellar na hora. Gasta esses tokens como desconto no comércio local. E cada quilo fica registrado on-chain — a prefeitura vê o impacto em tempo real."

---

## Slide 4 — Como funciona (0:55–1:15)

**No slide (diagrama):**
```
Cidadão → Ecoponto valida kg → register_recycle() → tokens mintados
Cidadão → Comércio → redeem() → desconto aplicado
```
- 3 atores: **Cidadão · Ecoponto · Comércio**

**Roteiro falado:**
> "São três atores e duas operações. O ecoponto valida o peso e chama register_recycle — minta dez tokens por quilo. O cidadão chama redeem e paga o comércio. Simples de entender, impossível de fraudar."

---

## Slide 5 — Por que Stellar (1:15–1:35)

**No slide:**
- Núcleo em **Soroban** (Rust)
- Taxa **quase zero** → viável p/ micro-recompensas
- Liquidação instantânea · carteira Freighter
- ✅ **Deployado e rodando na testnet**

**Roteiro falado:**
> "Por que Stellar? Porque micro-recompensa de centavos só fecha a conta com taxa quase zero e liquidação instantânea — exatamente o que Soroban entrega. E isso não é slide: o contrato já está deployado e funcionando na testnet."

---

## Slide 6 — Demo (1:35–2:35)  ⟵ *tela ao vivo / GIF*

**No slide:**
- dApp: saldo do cidadão · registro no ecoponto · resgate no comércio
- Link stellar.expert (prova de deploy)

**Roteiro falado (enquanto demonstra):**
> "Vou mostrar. Aqui o ecoponto registra 5 kg de um cidadão — e cunha 50 tokens. Troco de aba: o cidadão vê o saldo e resgata 30 no comércio. Abro o explorer: a transação está lá, pública, imutável. Fim a fim, em segundos."

---

## Slide 7 — Impacto smart city (2:35–2:50)

**No slide:**
- ↑ taxa de reciclagem (incentivo econômico direto)
- ↑ comércio local (token só circula na cidade)
- Painel **auditável** de kg reciclados p/ o poder público

**Roteiro falado:**
> "O impacto é triplo: mais reciclagem, mais movimento no comércio local — porque o token só circula na cidade — e um painel auditável de impacto ambiental para a prefeitura."

---

## Slide 8 — Diferencial (2:50–3:00)

**No slide:**
- Não é app de pontos fechado
- É **valor programável e transparente**
- Loop fechado cidade ↔ cidadão ↔ comércio

**Roteiro falado:**
> "Não é mais um app de pontos fechado. É valor programável e transparente, num loop econômico que fica dentro da cidade."

---

## Slide 9 — Roadmap (3:00–3:10)

**No slide:**
- **Hoje:** contrato testnet + dApp 3 telas
- **Próximo:** mainnet, mobile, balanças integradas, prefeituras da Baixada Santista
- **Visão:** marketplace de recompensas + créditos de carbono

**Roteiro falado:**
> "Hoje temos MVP na testnet. O caminho é mainnet, app mobile e piloto com uma prefeitura da Baixada Santista. A visão é virar um marketplace de recompensas ligado a créditos de carbono."

---

## Slide 10 — Fechamento (3:10–3:20)

**No slide:**
- **ReciclaChain — reciclar vira valor.**
- Time Connect 3bros · github.com/mhaurinho/stellar · testnet: CDJSWDWI…V4XQR4

**Roteiro falado:**
> "ReciclaChain: reciclar vira valor — pra cidade, pro cidadão e pro comércio. Obrigado."

---

## Preparação de Q&A (perguntas prováveis dos jurados)

- **"E se o ecoponto fraudar o peso?"** → Hoje o admin (ecoponto) é autorizado on-chain; roadmap prevê balança integrada assinando a transação + auditoria pública dos registros.
- **"O que dá lastro ao token?"** → O comércio aceita como desconto (convênio municipal), como um vale-troca. Não é especulativo; é utilitário e local.
- **"Por que blockchain e não um banco de dados?"** → Transparência auditável pelo cidadão e pela prefeitura, e liquidação sem intermediário. O diferencial é a prova pública, não a tecnologia pela tecnologia.
- **"Escala / custo?"** → Taxa Soroban é fração de centavo por transação; viável para milhões de micro-recompensas.
- **"Como uma prefeitura adota?"** → Onboarding como tenant na nossa plataforma: cada município tem seu ecoponto/admin e define sua taxa (tokens/kg), sem precisar operar infraestrutura.

## Checklist do dia da apresentação

- [ ] Freighter instalado, na **testnet**, com a conta admin importada
- [ ] dApp rodando (`npm run dev`) + aba do stellar.expert já aberta
- [ ] Plano B: GIF/vídeo gravado da demo, caso a rede falhe
- [ ] Cronometrar: fala ≤ 3 min, demo ≤ 1 min
