export interface LoginI {
  email: string;
  password: string;
}

export interface UserI {
  id: number;
  name: string;
  phone: string;
  email: string;
  password: string;
  users_role:{
    id: number;
    name: string;
  },
  idrole: number;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface RoleI{
  id: number;
  name: string;
}

export interface UserResponseI {
  token: string;
  user: UserI;
}

export interface UserErrorResponseI {
  status: string;
  result: string;
}
