import { atom } from 'recoil';

const dividerStyleAtom = atom({
  key: 'dividerStyle',
  default: {
    boxStyle: {
      backgroundColor: '#FFFFFF', // 기본값: 흰색
      borderWidth: '0px', // 기본값: 0px, 얇게: 1px, 보통: 2px, 두껍게: 3px
      borderColor: '#000000', // 기본값: 검정색
      borderStyle: 'solid', // solid, dotted, dashed
      paddingTop: '15px', // 기본값: 15px(보통), 없음: 0px, 좁게: 5px, 넓게: 25px,
      paddingBottom: '15px', // paddingTop 과 동일
      paddingLeft: '0px', // 기본값: 0px(없음), 좁게: 5px, 보통: 15px, 넓게: 25px,
      paddingRight: '0px', // paddingLeft 와 동일
    },
    contentStyle: {
      height: '1px', // 사용자 조절값 X, 스타일 유지를 위한 고정값
      borderTopWidth: '2px', // 기본값: 2px(보통), 얇게: 1px, 굵게: 3px
      borderTopStyle: 'solid', // 기본값: solid(직선), 짧은 점선: dotted, 긴 점선: dashed
      borderTopColor: '#000000', // 기본값: 검정색
    },
  },
});

export default dividerStyleAtom;
