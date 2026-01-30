import { useState } from "react";
import { createOrder } from "../../services/api";

export default function NewOrder({ setPage, setOrders }) {
  const [form, setForm] = useState({
    title: "",
    priority: "",
    responsible: ""
  });

  function handleSubmit(e) {
    e.preventDefault();

    const newOrder = {
      id: Date.now(),
      title: form.title,
      status: "Em andamento",
      priority: form.priority,
      responsible: form.responsible
    };

    createOrder(newOrder);
    setOrders(prev => [...prev, newOrder]);
    setPage("list");
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Nova Ordem</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow max-w-md"
      >
        <input
          placeholder="Título"
          className="w-full mb-3 p-2 border rounded"
          onChange={e => setForm({ ...form, title: e.target.value })}
          required
        />

        <select
          className="w-full mb-3 p-2 border rounded"
          onChange={e => setForm({ ...form, priority: e.target.value })}
          required
        >
          <option value="">Prioridade</option>
          <option value="Alta">Alta</option>
          <option value="Média">Média</option>
          <option value="Baixa">Baixa</option>
        </select>

        <input
          placeholder="Responsável"
          className="w-full mb-4 p-2 border rounded"
          onChange={e => setForm({ ...form, responsible: e.target.value })}
          required
        />

        <div className="flex gap-2">
          <button className="bg-black text-white px-4 py-2 rounded">
            Salvar
          </button>

          <button
            type="button"
            onClick={() => setPage("list")}
            className="border px-4 py-2 rounded"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
