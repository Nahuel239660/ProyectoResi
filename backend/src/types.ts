export interface Context {
  user?: {
    id: string;
    role: string;
  };
}

export interface User {
  id: string;
  username: string;
  password: string;
  email: string;
  role: 'guest' | 'user' | 'admin';
}
