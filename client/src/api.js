import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

export const fetchProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/api/products`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
};



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


