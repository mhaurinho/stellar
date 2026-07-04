import { useEffect, useState } from "react";
import { readClient, writeClient, unwrap } from "../contract";

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
      <div className="stats">
        <div className="stat">
          <span className="stat-value">
            {balance === null ? "…" : balance.toString()}
          </span>
          <span className="stat-label">tokens RECIC</span>
        </div>
        <div className="stat">
          <span className="stat-value">
            {recycled === null ? "…" : recycled.toString()}
          </span>
          <span className="stat-label">kg reciclados</span>
        </div>
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
      <button
        className="primary"
        disabled={loading || !merchant || !amount}
        onClick={redeem}
      >
        {loading ? "Enviando…" : "Resgatar"}
      </button>
      {status && <p className="status">{status}</p>}
    </div>
  );
}
