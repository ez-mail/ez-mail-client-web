import { atom } from 'recoil';

const dividerStyleAtom = atom({
  key: 'dividerStyle',
  default: {
    boxStyle: {
      backgroundColor: '#FFFFFF',
      borderWidth: '0px',
      borderColor: '#000000',
      borderStyle: 'solid',
      paddingTop: '15px',
      paddingBottom: '15px',
      paddingLeft: '0px',
      paddingRight: '0px',
    },
    contentStyle: {
      height: '1px',
      borderTopWidth: '2px',
      borderTopStyle: 'solid',
      borderTopColor: '#000000',
    },
  },
});

export default dividerStyleAtom;
