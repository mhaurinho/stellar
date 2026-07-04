import { useState } from "react";
import { motion } from "motion/react";
import { writeClient, unwrap } from "../contract";
import { ADMIN_ADDRESS } from "../config";

export function Ecoponto({ address }: { address: string }) {
  const [citizen, setCitizen] = useState("");
  const [kg, setKg] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const isAdmin = address === ADMIN_ADDRESS;

  async function register() {
    setStatus("");
    setLoading(true);
    try {
      const c = writeClient(address);
      const tx = await c.register_recycle({
        to: citizen.trim(),
        kg: BigInt(kg),
      });
      const sent = await tx.signAndSend();
      const reward = unwrap<bigint>(sent.result);
      setStatus(`Registrado! Recompensa mintada: ${reward.toString()} tokens.`);
      setCitizen("");
      setKg("");
    } catch (e) {
      setStatus("Falha: " + String(e));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card">
      <h2>Ecoponto</h2>
      <p className="sub">Valide o descarte em kg e minte a recompensa on-chain.</p>
      {!isAdmin && (
        <p className="warn">
          Atenção: a carteira conectada não é o ecoponto autorizado. O registro
          será rejeitado on-chain (exige auth do admin).
        </p>
      )}
      <h3>Registrar descarte</h3>
      <label>Endereço do cidadão</label>
      <input
        value={citizen}
        onChange={(e) => setCitizen(e.target.value)}
        placeholder="G..."
      />
      <label>Peso reciclado (kg)</label>
      <input
        value={kg}
        onChange={(e) => setKg(e.target.value)}
        placeholder="5"
        inputMode="numeric"
      />
      <motion.button
        className="primary"
        disabled={loading || !citizen || !kg}
        onClick={register}
        whileHover={{ scale: loading ? 1 : 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {loading ? "Enviando…" : "Registrar e recompensar"}
      </motion.button>
      {status && <p className="status">{status}</p>}
    </div>
  );
}
