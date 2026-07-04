import { Client } from "recic-token";
import { CONTRACT_ID, NETWORK_PASSPHRASE, RPC_URL } from "./config";
import { signWith } from "./wallet";

/** Cliente somente-leitura (simulação): balance, total_recycled, rate. */
export function readClient() {
  return new Client({
    contractId: CONTRACT_ID,
    networkPassphrase: NETWORK_PASSPHRASE,
    rpcUrl: RPC_URL,
  });
}

/** Cliente para transações assinadas pela carteira conectada. */
export function writeClient(publicKey: string) {
  return new Client({
    contractId: CONTRACT_ID,
    networkPassphrase: NETWORK_PASSPHRASE,
    rpcUrl: RPC_URL,
    publicKey,
    signTransaction: (xdr: string) => signWith(xdr, publicKey),
  });
}

/** Desembrulha um Result<T> do contrato (ou retorna o valor cru). */
export function unwrap<T>(r: unknown): T {
  const anyR = r as { unwrap?: () => T };
  return anyR && typeof anyR.unwrap === "function" ? anyR.unwrap() : (r as T);
}
