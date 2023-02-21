import { atom } from 'recoil';

const loginUserAtom = atom({
  key: 'loginUser',
  default: null,
});

export default loginUserAtom;
