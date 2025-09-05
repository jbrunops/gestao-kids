export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  role: 'parent' | 'child';
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}
