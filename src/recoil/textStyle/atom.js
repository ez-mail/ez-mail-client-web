import { atom } from 'recoil';

const textStyleAtom = atom({
  key: 'textStyle',
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
      textAlign: 'left', // 텍스트 정렬 기본값: left(가운데), 가운데: center, 오른쪽: right
    },
    contentStyle: {
      fontSize: '24px', // 기본값: 24px, 12, 14, 16, 18, 20, 32, 40, 48, 60
      fontFamily:
        'AppleSDGothic, "apple sd gothic neo", "noto sans korean", "noto sans korean regular", "noto sans cjk kr", "noto sans cjk", "nanum gothic", "malgun gothic", dotum, arial, helvetica, sans-serif',
      // 글자 폰트 기본값 고딕, 옵션 명조 ("nanum myoungjo", 바탕, batang, serif)
    },
  },
});

export default textStyleAtom;
