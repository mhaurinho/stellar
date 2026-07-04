import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { readClient } from "../contract";
import { AnimatedNumber } from "./AnimatedNumber";

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
      <p className="sub">Tokens recebidos de cidadãos como pagamento.</p>
      <div className="stats">
        <motion.div
          className="stat"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          <AnimatedNumber value={balance} />
          <span className="stat-label">tokens RECIC recebidos</span>
        </motion.div>
      </div>
      <p className="muted">
        Tokens recebidos de cidadãos como pagamento/desconto. Compartilhe seu
        endereço para receber resgates.
      </p>
      {status && <p className="status">{status}</p>}
    </div>
  );
}
