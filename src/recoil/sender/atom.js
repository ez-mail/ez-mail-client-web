import { atom } from 'recoil';

const senderAtom = atom({
  key: 'sender',
  default: '',
});

export default senderAtom;
