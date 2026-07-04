# Contrato RecicToken (Soroban)

Contrato de recompensa por reciclagem. Código: `onchain/contracts/recic-token/`.

## Deploy testnet (referência)

- **Contract ID:** `CDJSWDWI7H6I7FSUTKUWRFSOIIVJEXFOKM6WB67GLGAO72U7KDV4XQR4`
- Explorer: https://stellar.expert/explorer/testnet/contract/CDJSWDWI7H6I7FSUTKUWRFSOIIVJEXFOKM6WB67GLGAO72U7KDV4XQR4
- Admin (ecoponto): `recicla-admin` = `GCCLW4M7QLBRYU7GOQ75KFQK5R6XJ644GNTZ4JTSEGWETAL3XZ6UM65C`
- Rate configurado: 10 tokens por kg

## Funções

| Função | Auth | Descrição |
|---|---|---|
| `initialize(admin, rate)` | — (uma vez) | Define ecoponto admin e tokens/kg |
| `register_recycle(to, kg)` | admin | Valida descarte e minta recompensa (`kg * rate`); emite evento `recycle` |
| `redeem(from, merchant, amount)` | from | Cidadão gasta tokens no comércio; emite evento `redeem` |
| `balance(id) -> i128` | — | Saldo de tokens |
| `total_recycled(id) -> i128` | — | Total de kg reciclados (estatística) |
| `rate() -> i128` | — | Tokens por kg |

Erros: `AlreadyInitialized(1)`, `NotInitialized(2)`, `InsufficientBalance(3)`, `InvalidAmount(4)`.

## Fluxo validado on-chain (2026-07-04)

```bash
export PATH="$HOME/.cargo/bin:$PATH"
C=CDJSWDWI7H6I7FSUTKUWRFSOIIVJEXFOKM6WB67GLGAO72U7KDV4XQR4

# 1. inicializa (rate=10)
stellar contract invoke --id $C --source recicla-admin --network testnet \
  -- initialize --admin <ADMIN> --rate 10

# 2. ecoponto registra 5kg do cidadao -> minta 50 tokens
stellar contract invoke --id $C --source recicla-admin --network testnet --send=yes \
  -- register_recycle --to <CIDADAO> --kg 5

# 3. cidadao gasta 30 no comercio
stellar contract invoke --id $C --source cidadao --network testnet --send=yes \
  -- redeem --from <CIDADAO> --merchant <COMERCIO> --amount 30

# saldos: cidadao=20, comercio=30, total_recycled=5kg  ✅
```

## Pendências de polimento
- Migrar `env.events().publish(...)` para o macro `#[contractevent]` (hoje gera warning de deprecação; funcional).
- Extensão de TTL do storage persistente (não crítico para demo).
