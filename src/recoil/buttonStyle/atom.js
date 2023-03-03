import { atom } from 'recoil';

const buttonStyleAtom = atom({
  key: 'buttonStyle',
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
      textAlign: 'center', // 버튼정렬 기본값: center(가운데), 왼쪽: left, 오른쪽: right
    },
    contentStyle: {
      display: 'inline-block', // 사용자 조절값 X, 스타일 유지를 위한 고정값
      paddingTop: '16px', // 사용자 조절값 X, 스타일 유지를 위한 고정값
      paddingBottom: '16px', // 사용자 조절값 X, 스타일 유지를 위한 고정값
      paddingLeft: '18px', // 사용자 조절값 X, 스타일 유지를 위한 고정값
      paddingRight: '18px', // 사용자 조절값 X, 스타일 유지를 위한 고정값
      backgroundColor: '#ffdf2b', // 버튼색상 기본값: 시그니처 노랑
      color: '#000000', // 글자색상 기본값: 검정
      borderWidth: '0px', // 버튼 테두리 기본값: 0px(없음), 얇게: 1px, 보통: 2px, 굵게: 3px
      borderStyle: 'solid', // 사용자 조절값 X, 스타일 유지를 위한 고정값
      borderRadius: '3px', // 버튼 모양 기본값 사각형, 원형: 500px
      fontSize: '16px', // 글자 크기 기본값 16px, 12, 14, 18, 20, 26, 32, 40, 48, 60
      fontFamily:
        'AppleSDGothic, "apple sd gothic neo", "noto sans korean", "noto sans korean regular", "noto sans cjk kr", "noto sans cjk", "nanum gothic", "malgun gothic", "dotum", arial, helvetica, sans-serif',
      // 글자 폰트 기본값 고딕, 옵션 명조 ("nanum myoungjo", 바탕, batang, serif)
    },
  },
});

export default buttonStyleAtom;
