import { useEffect, useState } from "react";
import { readClient } from "../contract";

export function Comercio({ address }: { address: string }) {
  const [balance, setBalance] = useState<bigint | null>(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    readClient()
      .balance({ id: address })
      .then((b) => setBalance(b.result))
      .catch((e) => setStatus("Erro ao ler saldo: " + String(e)));
  }, [address]);

  return (
    <div className="card">
      <h2>Comércio</h2>
      <div className="stats">
        <div className="stat">
          <span className="stat-value">
            {balance === null ? "…" : balance.toString()}
          </span>
          <span className="stat-label">tokens RECIC recebidos</span>
        </div>
      </div>
      <p className="muted">
        Tokens recebidos de cidadãos como pagamento/desconto. Compartilhe seu
        endereço para receber resgates.
      </p>
      {status && <p className="status">{status}</p>}
    </div>
  );
}
