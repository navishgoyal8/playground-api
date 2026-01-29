const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const apiGet = async (path) => {
  const res = await fetch(`${BASE_URL}${path}`);
  return res.json();
};
