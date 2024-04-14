export interface IUserDecoded {
  user_id: string;
  firstName: string;
  fullname: string;
  lastName: string | null;
  email: string;
  roles: string;
  phone: string;
  exp: number;
  token_type: string;
  iat: number;
}

export interface ILoginInput {
  email: string;
  password: string;
}
export interface IRegisterInput {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
}

export interface IUserInput {
  firstname: string;
  lastname: string;
}
