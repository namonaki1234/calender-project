import { LoginInfoType, LoginReturnType } from '../types/Login';

export const login = (info: LoginInfoType): LoginReturnType => {
  const { email, password } = info;
  if (email === 'test@example.com' && password === 'password') {
    return { id: 1, name: 'sample太郎' };
  } else {
    throw new Error();
  }
};
