import axios from "axios";


// Configure axios with the base URL
const API = axios.create({ baseURL: "http://localhost:5000/api" }); // Base URL includes `/api`

// Attach the token to every request automatically (for admin routes)
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("adminToken");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const updateOrderStatus = (orderId, statusData) =>
  API.patch(`/orders/${orderId}/status`, statusData);

// Authentication APIs
export const signup = (formData) => API.post("/auth/signup", formData);
export const signin = (formData) => API.post("/auth/signin", formData);

// Admin Orders APIs
export const fetchAdminOrders = () => API.get("/orders"); // Fetch all orders
export const createAdminOrder = (orderData) => API.post("/orders", orderData); // Create a new order
export const deleteAdminOrder = (orderId) => API.delete(`/orders/${orderId}`); // Delete an order


