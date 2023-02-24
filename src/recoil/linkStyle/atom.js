import { atom } from 'recoil';

const linkStyleAtom = atom({
  key: 'linkStyle',
  default: {
    fontWeight: 'normal',
    textDecorationLine: 'none',
    color: '#000000',
  },
});

export default linkStyleAtom;
