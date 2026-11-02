// Empty in development (Vite proxies /api), the Hostinger backend URL in production
const API_URL = import.meta.env.VITE_API_URL ?? "";

export const sendContactMessage = async (form) => {
  const response = await fetch(`${API_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong. Please try again.");
  }

  return data;
};
