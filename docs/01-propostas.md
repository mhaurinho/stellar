# 10 Propostas — Smart City na Stellar

> Escala de viabilidade (6 dias + pitch deck + vídeo 1–2 min + deploy testnet):
> 🟢 Factível · 🟡 Médio · 🔴 Complexo
> Colunas: **Dor** · **Integração Stellar** · **Por que pontua** · **Viabilidade**

## Bloco A — Cidadão / sustentabilidade

### 1. ReciclaChain 🟢
- **Dor:** baixa adesão à reciclagem; sem incentivo tangível.
- **Stellar:** contrato Soroban emite token de recompensa por descarte validado; resgate por desconto no comércio.
- **Pontua:** loop econômico fechado, impacto social claro, demo visual forte.
- **Viabilidade:** 🟢 1 contrato (mint/resgate) + dApp simples.

### 2. ZeladoriaDAO — "buraco na rua" 🟢
- **Dor:** demora do poder público em consertar buracos/iluminação.
- **Stellar:** cidadão reporta → prefeitura abre "bounty" → prestador conclui → pagamento on-chain via escrow.
- **Pontua:** transparência + eficiência operacional urbana.
- **Viabilidade:** 🟢 contrato de escrow/bounty + upload de foto.

### 3. TurisToken (Baixada Santista) 🟢
- **Dor:** gestão de fluxo turístico e acesso a atrativos no litoral.
- **Stellar:** passes/ingressos como assets Stellar; fidelidade turística regional.
- **Pontua:** relevância regional (Santos/Guarujá), fácil de demonstrar.
- **Viabilidade:** 🟢 emissão de asset + carteira.

## Bloco B — Mobilidade / energia

### 4. MobiPay 🟡
- **Dor:** pagamento fragmentado de ônibus/zona azul/patinete, taxas altas.
- **Stellar:** créditos de tarifa em stablecoin, liquidação instantânea taxa quase zero.
- **Pontua:** caso de pagamento real (força da Stellar).
- **Viabilidade:** 🟡 contrato de créditos + UX de "tap".

### 5. Lumen Energia — P2P solar 🟡
- **Dor:** excedente de energia solar sem mercado local líquido.
- **Stellar:** tokeniza kWh; vizinhos compram/vendem excedente on-chain.
- **Pontua:** sustentabilidade + mercado inovador.
- **Viabilidade:** 🟡 contrato de marketplace de créditos (medição é mockada no MVP).

## Bloco C — Governança

### 6. CivicVote — orçamento participativo 🟡
- **Dor:** morador não decide nem acompanha verba do bairro.
- **Stellar:** propostas + votação + tesouraria liberada por resultado (Soroban).
- **Pontua:** governança transparente; **conecta com o Bloco D (integridade)**.
- **Viabilidade:** 🟡 contrato voto + tesouraria.

### 7. Tributo Transparente (IPTU/taxas) 🟡
- **Dor:** pagamento de tributo opaco; cidadão não vê destino.
- **Stellar:** pagamento de taxa municipal + trilha pública do uso.
- **Pontua:** adoção institucional + transparência fiscal.
- **Viabilidade:** 🟡 pagamento + registro on-chain.

## Bloco D — INTEGRIDADE INSTITUCIONAL (as 2 pedidas) ★

### 8. ★ LicitaChain — licitação pública anti-fraude 🟡
- **Dor:** licitações vulneráveis a conluio, propostas alteradas, falta de auditoria.
- **Stellar:** cada proposta é registrada com **commit-reveal** (hash on-chain antes da abertura), timestamp imutável, vencedor e critérios auditáveis por qualquer um.
- **Pontua:** integridade institucional direta; alinhado ao stakeholder governo do ILIS; alta complexidade técnica valorizada.
- **Viabilidade:** 🟡 contrato de commit-reveal + painel público.

### 9. ★ GastoPúblico Aberto — auditoria de gasto municipal 🟢
- **Dor:** despesa pública difícil de rastrear em tempo real; desvios só descobertos tarde.
- **Stellar:** cada empenho/pagamento vira transação com metadados; painel público mostra fluxo verba→fornecedor→execução, imutável.
- **Pontua:** transparência radical, "prova de gasto"; ótimo storytelling no pitch.
- **Viabilidade:** 🟢 registro de transações + dashboard (leve).

### Sinergia do Bloco de Integridade (nossa narrativa forte)
`CivicVote (6)` decide a verba → `LicitaChain (8)` contrata sem fraude → `GastoPúblico (9)` audita a execução.
Isso forma um **"Ciclo de Integridade Fiscal da Cidade"** — dá pra pitchar 8+9 como um produto só, com 6 como visão de roadmap. Diferencial competitivo altíssimo e escopo ainda factível.

## Bloco E — Regional / infraestrutura

### 10. PortoChain — logística do Porto de Santos 🔴
- **Dor:** documentação e liquidação de cargas lenta e burocrática no maior porto da América Latina.
- **Stellar:** registro de carga + escrow por milestone + liquidação instantânea.
- **Pontua:** relevância regional máxima; impacto econômico.
- **Viabilidade:** 🔴 domínio complexo, muitos atores; risco de não fechar demo em 6 dias.

## Ranking de recomendação (esforço × nota)

| # | Proposta | Viab. | Nota potencial |
|---|---|---|---|
| 8+9 | **Ciclo de Integridade Fiscal** (LicitaChain + GastoPúblico) | 🟡 | ⭐⭐⭐⭐⭐ |
| 1 | ReciclaChain | 🟢 | ⭐⭐⭐⭐ |
| 2 | ZeladoriaDAO | 🟢 | ⭐⭐⭐⭐ |
| 6 | CivicVote | 🟡 | ⭐⭐⭐⭐ |
| 4 | MobiPay | 🟡 | ⭐⭐⭐ |

**Aposta principal:** 8+9 (integridade) — casa com o organizador (governo), tem narrativa forte pro pitch/vídeo e escopo controlável.
**Aposta segura:** 1 ou 2 — demo mais visual e menos risco técnico.
