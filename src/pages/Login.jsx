import { useState } from "react";
import Dashboard from "./Dashboard";

export default function Login() {
  const [logged, setLogged] = useState(false);

  if (logged) {
    return <Dashboard />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">FlowDesk</h1>

        <input className="w-full mb-4 p-2 border rounded" placeholder="Código" />
        <input
          className="w-full mb-6 p-2 border rounded"
          type="password"
          placeholder="Senha"
        />

        <button
          onClick={() => setLogged(true)}
          className="w-full bg-black text-white py-2 rounded"
        >
          Entrar
        </button>
      </div>
    </div>
  );
}

