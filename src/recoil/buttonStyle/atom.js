import { atom } from 'recoil';

const buttonStyleAtom = atom({
  key: 'buttonStyle',
  default: {
    borderRadius: '0px',
    color: '#ffdf2b',
    borderWidth: '0px',
    borderColor: '#000000',
    align: 'center',
  },
});

export default buttonStyleAtom;
