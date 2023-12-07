import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/users";

export const login = async (email, password) => {
  const result = await request.post(`${baseUrl}/login`, {
    email,
    password,
  });

  // Store authentication token in localStorage
  localStorage.setItem("authToken", result.token);

  return result;
};

export const logout = async () => {
  // Remove authentication token from localStorage
  localStorage.removeItem("authToken");

  await request.get(`${baseUrl}/logout`);
};

export const register = async (email, password) => {
  const result = await request.post(`${baseUrl}/register`, {
    email,
    password,
  });

  // Store authentication token in localStorage
  localStorage.setItem("authToken", result.token);

  return result;
};

export const isAuthenticated = () => {
  // Check if the authentication token is present in localStorage
  return localStorage.getItem("authToken") !== null;
};
