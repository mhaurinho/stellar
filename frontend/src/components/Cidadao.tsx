import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { readClient, writeClient, unwrap } from "../contract";
import { AnimatedNumber } from "./AnimatedNumber";

export function Cidadao({ address }: { address: string }) {
  const [balance, setBalance] = useState<bigint | null>(null);
  const [recycled, setRecycled] = useState<bigint | null>(null);
  const [merchant, setMerchant] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function refresh() {
    const c = readClient();
    const b = await c.balance({ id: address });
    const r = await c.total_recycled({ id: address });
    setBalance(b.result);
    setRecycled(r.result);
  }

  useEffect(() => {
    refresh().catch((e) => setStatus("Erro ao ler saldo: " + String(e)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  async function redeem() {
    setStatus("");
    setLoading(true);
    try {
      const c = writeClient(address);
      const tx = await c.redeem({
        from: address,
        merchant: merchant.trim(),
        amount: BigInt(amount),
      });
      const sent = await tx.signAndSend();
      unwrap<void>(sent.result);
      setStatus("Resgate concluído!");
      setMerchant("");
      setAmount("");
      await refresh();
    } catch (e) {
      setStatus("Falha: " + String(e));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card">
      <h2>Cidadão</h2>
      <p className="sub">Seu saldo de recompensas e histórico de reciclagem.</p>
      <div className="stats">
        <motion.div
          className="stat"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          <AnimatedNumber value={balance} />
          <span className="stat-label">tokens RECIC</span>
        </motion.div>
        <motion.div
          className="stat"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
        >
          <AnimatedNumber value={recycled} />
          <span className="stat-label">kg reciclados</span>
        </motion.div>
      </div>

      <h3>Resgatar no comércio</h3>
      <label>Endereço do comércio</label>
      <input
        value={merchant}
        onChange={(e) => setMerchant(e.target.value)}
        placeholder="G..."
      />
      <label>Quantidade de tokens</label>
      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="30"
        inputMode="numeric"
      />
      <motion.button
        className="primary"
        disabled={loading || !merchant || !amount}
        onClick={redeem}
        whileHover={{ scale: loading ? 1 : 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {loading ? "Enviando…" : "Resgatar"}
      </motion.button>
      {status && <p className="status">{status}</p>}
    </div>
  );
}
