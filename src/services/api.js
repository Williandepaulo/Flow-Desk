const STORAGE_KEY = "FLOWDESK_ORDERS";

export function getOrders() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function createOrder(order) {
  const orders = getOrders();
  orders.push(order);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
}

export function deleteOrder(id) {
  const orders = getOrders().filter(order => order.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
  return orders;
}
