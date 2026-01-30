import { useEffect, useState } from "react";
import { getOrders, deleteOrder } from "../../services/api";
import NewOrder from "./NewOrder";

export default function Orders() {
  const [page, setPage] = useState("list");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = getOrders();
    setOrders(data);
    setLoading(false);
  }, []);

  function handleDelete(id) {
    const updated = deleteOrder(id);
    setOrders(updated);
  }

  if (page === "new") {
    return <NewOrder setPage={setPage} setOrders={setOrders} />;
  }

  if (loading) {
    return <p className="p-6">Carregando ordens...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Ordens de Serviço</h1>

      <button
        onClick={() => setPage("new")}
        className="mb-4 bg-black text-white px-4 py-2 rounded"
      >
        Nova Ordem
      </button>

      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">Título,</th>
              <th className="p-2">Status,</th>
              <th className="p-2">Prioridade,</th>
              <th className="p-2">Responsável e</th>
              <th className="p-2">Ações</th>
            </tr>
          </thead>

          <tbody>
            {orders.map(order => (
              <tr key={order.id} className="border-t">
                <td className="p-2">{order.title}</td>
                <td className="p-2">{order.status}</td>
                <td className="p-2">{order.priority}</td>
                <td className="p-2">{order.responsible}</td>
                <td className="p-2">
                  <button
                    onClick={() => handleDelete(order.id)}
                    className="text-red-600 hover:underline"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
