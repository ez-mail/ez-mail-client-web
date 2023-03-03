import { atom } from 'recoil';

const textStyleAtom = atom({
  key: 'textStyle',
  default: {
    content: '여기에 내용을 입력하세요.',
    boxStyle: {
      backgroundColor: '#FFFFFF',
      borderWidth: '0px',
      borderColor: '#000000',
      borderStyle: 'solid',
      paddingTop: '15px',
      paddingBottom: '15px',
      paddingLeft: '0px',
      paddingRight: '0px',
      textAlign: 'left',
    },
    contentStyle: {
      fontSize: '24px',
      fontFamily:
        'AppleSDGothic, "apple sd gothic neo", "noto sans korean", "noto sans korean regular", "noto sans cjk kr", "noto sans cjk", "nanum gothic", "malgun gothic", dotum, arial, helvetica, sans-serif',
    },
  },
});

export default textStyleAtom;
