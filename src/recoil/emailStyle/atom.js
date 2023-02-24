import { atom } from 'recoil';

const emailStyleAtom = atom({
  key: 'emailStyle',
  default: {
    backgroundColor: '#ffffff',
    bodyColor: '#ffffff',
    bodyBorderWidth: '0px',
    bodyBorderColor: '#000000',
  },
});

export default emailStyleAtom;
