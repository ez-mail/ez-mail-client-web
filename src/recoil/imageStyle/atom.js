import { atom } from 'recoil';

const imageStyleAtom = atom({
  key: 'imageStyle',
  default: {
    link: '#',
    imageSrc: '',
    boxStyle: {
      backgroundColor: '#FFFFFF',
      borderWidth: '0px',
      borderColor: '#000000',
      borderStyle: 'solid',
      paddingTop: '15px',
      paddingBottom: '15px',
      paddingLeft: '15px',
      paddingRight: '15px',
      textAlign: 'center',
    },
    contentStyle: {
      maxWidth: '100%',
      width: '',
    },
  },
});

export default imageStyleAtom;
