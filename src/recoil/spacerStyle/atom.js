import { atom } from 'recoil';

const spacerStyleAtom = atom({
  key: 'spacerStyle',
  default: {
    boxStyle: {
      backgroundColor: '#FFFFFF', // 기본값: 흰색
      borderWidth: '0px', // 기본값: 0px, 얇게: 1px, 보통: 2px, 두껍게: 3px
      borderColor: '#000000', // 기본값: 검정색
      borderStyle: 'solid', // solid, dotted, dashed
      height: '50', // 10px ~ 100px
    },
  },
});

export default spacerStyleAtom;
