import { atom } from 'recoil';

const userIdAtom = atom({
  key: 'userId',
  default: null,
});

export default userIdAtom;
