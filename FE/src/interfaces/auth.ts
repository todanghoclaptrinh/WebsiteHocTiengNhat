// Định nghĩa interface cho đăng ký, đăng nhập, phân quyền

export interface RegisterPayload {
  email: string;
  password: string;
  fullName: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  email: string;
  roles: string[];
}

export interface User {
  userId: string;
  email: string;
  fullName: string;
  levelId?: string;
  roles: string[];
}

export interface Role {
  name: string;
}
