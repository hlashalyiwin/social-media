// client/src/api.js
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const myFetch = async (endpoint, options = {}) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, options);
  return response.json();
};
