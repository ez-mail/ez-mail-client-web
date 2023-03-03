import { atom } from 'recoil';

const spacerStyleAtom = atom({
  key: 'spacerStyle',
  default: {
    boxStyle: {
      backgroundColor: '#FFFFFF',
      borderWidth: '0px',
      borderColor: '#000000',
      borderStyle: 'solid',
      height: '50',
    },
  },
});

export default spacerStyleAtom;
