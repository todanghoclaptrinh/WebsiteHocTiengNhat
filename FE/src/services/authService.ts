import axios from '../utils/axiosInstance';
import { RegisterPayload, LoginPayload, AuthResponse } from '../interfaces/auth';

const API_URL = import.meta.env.VITE_API_URL ?? 'https://localhost:7055/api';

export const authService = {
  // Đăng ký tài khoản mới
  async register(payload: RegisterPayload): Promise<void> {
    await axios.post(`${API_URL}/auth/register`, payload);
  },

  // Đăng nhập
  async login(payload: LoginPayload): Promise<AuthResponse> {
    const response = await axios.post<AuthResponse>(`${API_URL}/auth/login`, payload);
    return response.data;
  },
};
