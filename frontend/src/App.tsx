import { useState } from "react";
import { connectWallet } from "./wallet";
import { Cidadao } from "./components/Cidadao";
import { Ecoponto } from "./components/Ecoponto";
import { Comercio } from "./components/Comercio";
import { CONTRACT_ID } from "./config";
import "./App.css";

type Tab = "cidadao" | "ecoponto" | "comercio";

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
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <span className="logo">♻</span>
          <div>
            <h1>ReciclaChain</h1>
            <p className="tagline">Reciclar vira valor na sua cidade</p>
          </div>
        </div>
        {address ? (
          <span className="pill">{short(address)}</span>
        ) : (
          <button className="primary" onClick={connect}>
            Conectar carteira
          </button>
        )}
      </header>

      {err && <p className="status error">{err}</p>}

      {address ? (
        <>
          <nav className="tabs">
            <button
              className={tab === "cidadao" ? "active" : ""}
              onClick={() => setTab("cidadao")}
            >
              Cidadão
            </button>
            <button
              className={tab === "ecoponto" ? "active" : ""}
              onClick={() => setTab("ecoponto")}
            >
              Ecoponto
            </button>
            <button
              className={tab === "comercio" ? "active" : ""}
              onClick={() => setTab("comercio")}
            >
              Comércio
            </button>
          </nav>

          {tab === "cidadao" && <Cidadao address={address} />}
          {tab === "ecoponto" && <Ecoponto address={address} />}
          {tab === "comercio" && <Comercio address={address} />}
        </>
      ) : (
        <div className="card hero">
          <p>
            Conecte sua carteira Freighter (rede <b>Testnet</b>) para começar.
          </p>
        </div>
      )}

      <footer>
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
      </footer>
    </div>
  );
}
