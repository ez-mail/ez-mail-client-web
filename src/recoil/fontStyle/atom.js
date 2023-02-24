import { atom } from 'recoil';

const fontStyleAtom = atom({
  key: 'fontStyle',
  default: {
    fontFamily: '나눔고딕',
    fontSize: '16px',
    color: '#000000',
    textAlign: 'left',
  },
});

export default fontStyleAtom;
