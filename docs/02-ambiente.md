# Ambiente & Trilha Zero-to-Hero (validada)

Registro do setup para qualquer pessoa do time reproduzir. **Pipeline testado ponta a ponta em 2026-07-04.**

## Toolchain

| Ferramenta | Versão | Como instalar |
|---|---|---|
| Rust | 1.96.1 (host **GNU**) | `curl https://win.rustup.rs -o rustup-init.exe && ./rustup-init.exe -y --default-host x86_64-pc-windows-gnu --profile minimal` |
| Targets wasm | wasm32-unknown-unknown, wasm32v1-none | `rustup target add wasm32v1-none` |
| stellar CLI | 27.0.0 | binário pré-compilado extraído em `~/.cargo/bin/stellar.exe` |
| Node | 24.15.0 | já instalado |

> No git bash, adicione o cargo ao PATH: `export PATH="$HOME/.cargo/bin:$PATH"`
> Toolchain **GNU** escolhido para evitar dependência do Visual Studio Build Tools (mingw gcc já presente).

## Identidade testnet

- Alias: `recicla-admin`
- Endereço: `GCCLW4M7QLBRYU7GOQ75KFQK5R6XJ644GNTZ4JTSEGWETAL3XZ6UM65C`
- Financiada via friendbot: `stellar keys generate recicla-admin --network testnet --fund`

## Fluxo validado (hello-world)

```bash
export PATH="$HOME/.cargo/bin:$PATH"
cd onchain
stellar contract build
stellar contract deploy --wasm target/wasm32v1-none/release/hello_world.wasm \
  --source recicla-admin --network testnet
stellar contract invoke --id <CONTRACT_ID> --source recicla-admin --network testnet \
  -- hello --to Reciclador
# -> ["Hello","Reciclador"]
```

### Deploy de referência (hello-world)
- Contract ID: `CB7IBUC3VNJX5MWLDIGWVML3OKMQ54WU5AS5OZNJ5JJOOCJQMUDIE6JB`
- Explorer: https://stellar.expert/explorer/testnet/contract/CB7IBUC3VNJX5MWLDIGWVML3OKMQ54WU5AS5OZNJ5JJOOCJQMUDIE6JB

## Estrutura do projeto

```
C:\Stellar
├─ docs/            # brief, propostas, ambiente
├─ onchain/         # contratos Soroban (workspace Rust)
│  └─ contracts/hello-world   # scaffold inicial (será substituído pelo RecicToken)
└─ frontend/        # (próxima fase) dApp React fork do soroban-react-mint-token
```

## Próximos passos (Fase 2 — MVP)
1. Contrato `RecicToken` (SEP-41 + `mint`/`redeem`) sobre `soroban-examples/token`.
2. Frontend fork de `stellar/soroban-react-mint-token` com 3 telas (cidadão/ecoponto/comércio).
3. Deploy do RecicToken na testnet + integração com Freighter.
