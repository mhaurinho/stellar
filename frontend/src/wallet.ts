import { StellarWalletsKit } from "@creit.tech/stellar-wallets-kit";
import { FreighterModule } from "@creit.tech/stellar-wallets-kit/modules/freighter";
import { Networks } from "@stellar/stellar-sdk";
import { NETWORK_PASSPHRASE } from "./config";

let inited = false;

export function initWallet() {
  if (inited) return;
  StellarWalletsKit.init({
    modules: [new FreighterModule()],
    network: Networks.TESTNET,
  });
  inited = true;
}

/** Abre o modal, conecta a carteira e devolve o endereço. */
export async function connectWallet(): Promise<string> {
  initWallet();
  const { address } = await StellarWalletsKit.authModal();
  return address;
}

/** Assina um XDR usando a carteira conectada. */
export async function signWith(xdr: string, address: string) {
  return await StellarWalletsKit.signTransaction(xdr, {
    address,
    networkPassphrase: NETWORK_PASSPHRASE,
  });
}
