import { atom } from 'recoil';

const boxStyleAtom = atom({
  key: 'boxStyle',
  default: {
    backgroundColor: '#ffffff',
    borderWidth: '0px',
    borderColor: '#000000',
    paddingTop: '15px',
    paddingLeftRight: '15px',
  },
});

export default boxStyleAtom;
