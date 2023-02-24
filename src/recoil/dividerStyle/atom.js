import { atom } from 'recoil';

const dividerStyleAtom = atom({
  key: 'dividerStyle',
  default: {
    width: '1px',
    style: 'solid',
    color: '#000000',
  },
});

export default dividerStyleAtom;
