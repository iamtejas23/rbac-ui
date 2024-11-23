import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

// Fetch all users
export const getUsers = async () => {
  const response = await axios.get(`${API_BASE_URL}/users`);
  return response.data;
};

// Fetch all roles
export const getRoles = async () => {
  const response = await axios.get(`${API_BASE_URL}/roles`);
  return response.data;
};

// Add a new user
export const addUser = async (user) => {
  const response = await axios.post(`${API_BASE_URL}/users`, user);
  return response.data;
};

// Update an existing user
export const updateUser = async (user) => {
  const response = await axios.put(`${API_BASE_URL}/users/${user.id}`, user);
  return response.data;
};

// Delete a user
export const deleteUser = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/users/${id}`);
  return response.data;
};
