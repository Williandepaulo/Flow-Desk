import { useState } from "react";
import Orders from "./orders";

export default function Dashboard() {
  const [page, setPage] = useState("dashboard");

  if (page === "orders") {
    return <Orders />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <button
        onClick={() => setPage("orders")}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Ver Ordens de Serviço
      </button>
    </div>
  );
}
