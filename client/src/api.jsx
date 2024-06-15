// src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api'; // Thay thế bằng URL của API của bạn

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, { username, password });
    return response.data; // Dữ liệu trả về từ API, bao gồm thông tin về người dùng và vai trò
  } catch (error) {
    throw error;
  }
};
