import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { connectWallet } from "./wallet";
import { Cidadao } from "./components/Cidadao";
import { Ecoponto } from "./components/Ecoponto";
import { Comercio } from "./components/Comercio";
import { CONTRACT_ID } from "./config";
import "./App.css";

type Tab = "cidadao" | "ecoponto" | "comercio";

const TABS: { id: Tab; label: string }[] = [
  { id: "cidadao", label: "Cidadão" },
  { id: "ecoponto", label: "Ecoponto" },
  { id: "comercio", label: "Comércio" },
];

function short(a: string) {
  return a.slice(0, 4) + "…" + a.slice(-4);
}

export default function App() {
  const [address, setAddress] = useState<string | null>(null);
  const [tab, setTab] = useState<Tab>("cidadao");
  const [err, setErr] = useState("");

  async function connect() {
    setErr("");
    try {
      setAddress(await connectWallet());
    } catch (e) {
      setErr(String(e));
    }
  }

  return (
    <>
      <div className="aurora">
        <motion.div
          className="blob a"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="blob b"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="grid-overlay" />
      </div>

      <div className="app">
        <motion.header
          className="topbar"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="brand">
            <motion.span
              className="logo"
              initial={{ rotate: -20, scale: 0.6 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 14 }}
            >
              ♻
            </motion.span>
            <div>
              <h1>ReciclaChain</h1>
              <p className="tagline">Reciclar vira valor na sua cidade</p>
            </div>
          </div>
          {address ? (
            <motion.span
              className="pill"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              {short(address)}
            </motion.span>
          ) : (
            <motion.button
              className="primary"
              style={{ width: "auto", marginTop: 0 }}
              onClick={connect}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Conectar carteira
            </motion.button>
          )}
        </motion.header>

        <AnimatePresence>
          {err && (
            <motion.p
              className="status error"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              {err}
            </motion.p>
          )}
        </AnimatePresence>

        {address ? (
          <>
            <nav className="tabs">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  className={tab === t.id ? "active" : ""}
                  onClick={() => setTab(t.id)}
                >
                  {tab === t.id && (
                    <motion.span
                      layoutId="tab-glow"
                      className="tab-glow"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  {t.label}
                </button>
              ))}
            </nav>

            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                {tab === "cidadao" && <Cidadao address={address} />}
                {tab === "ecoponto" && <Ecoponto address={address} />}
                {tab === "comercio" && <Comercio address={address} />}
              </motion.div>
            </AnimatePresence>
          </>
        ) : (
          <motion.div
            className="card hero"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p>
              Conecte sua carteira Freighter (rede <b>Testnet</b>) para começar.
            </p>
          </motion.div>
        )}

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span>
            Contrato Soroban (testnet):{" "}
            <a
              href={`https://stellar.expert/explorer/testnet/contract/${CONTRACT_ID}`}
              target="_blank"
              rel="noreferrer"
            >
              {short(CONTRACT_ID)}
            </a>
          </span>
        </motion.footer>
      </div>
    </>
  );
}
