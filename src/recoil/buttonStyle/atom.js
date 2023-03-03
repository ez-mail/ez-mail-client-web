import { atom } from 'recoil';

const buttonStyleAtom = atom({
  key: 'buttonStyle',
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
      textAlign: 'center',
    },
    contentStyle: {
      display: 'inline-block',
      paddingTop: '16px',
      paddingBottom: '16px',
      paddingLeft: '18px',
      paddingRight: '18px',
      backgroundColor: '#ffdf2b',
      color: '#000000',
      borderWidth: '0px',
      borderStyle: 'solid',
      borderRadius: '3px',
      fontSize: '16px',
      fontFamily:
        'AppleSDGothic, "apple sd gothic neo", "noto sans korean", "noto sans korean regular", "noto sans cjk kr", "noto sans cjk", "nanum gothic", "malgun gothic", "dotum", arial, helvetica, sans-serif',
    },
  },
});

export default buttonStyleAtom;
