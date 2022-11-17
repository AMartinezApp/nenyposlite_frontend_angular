export interface ILogin {
  email: string;
  password: string;
}

export interface IUser {
  id: number;
  name: string;
  phone: string;
  idrole: number;
  createAt: string;
  updateAt: string;
}

export interface IUserResponse {
  token: string;
  user: IUser;
}

export interface IUserErrorResponse {
  status: string;
  result: string;
}
