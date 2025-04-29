import { atom } from 'recoil';

type LoginUserState = {
  id: number;
  name: string;
};

export const loginUserState = atom<LoginUserState>({
  key: 'LoginUser',
  default: {
    id: 0,
    name: '',
  },
});
