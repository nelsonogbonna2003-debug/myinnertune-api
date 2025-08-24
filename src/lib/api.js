import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE;

const apiClient = axios.create({
  baseURL: API_BASE,
  headers: { "Content-Type": "application/json" },
  withCredentials: false, // true if you later use cookies
});

export const api = {
  signup: async (data) => {
    const res = await apiClient.post("/signup", data);
    return res.data;
  },
  login: async (data) => {
    const res = await apiClient.post("/login", data);
    return res.data;
  },
  placeholder: async () => {
    const res = await apiClient.get("/placeholder");
    return res.data;
  },
  chatgpt: async (token, prompt) => {
    const res = await apiClient.post(
      "/chatgpt",
      { prompt },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return res.data;
  },
  saveFeedback: async (token, payload) => {
    const res = await apiClient.post("/save-feedback", payload, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  },
  saveSession: async (token, payload) => {
    const res = await apiClient.post("/save-session", payload, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  },
  createPdf: async (token, payload) => {
    const res = await apiClient.post("/create-pdf", payload, {
      headers: { Authorization: `Bearer ${token}` },
      responseType: "blob",
    });
    return res.data;
  },
};
