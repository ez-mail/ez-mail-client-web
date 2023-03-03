import { atom } from 'recoil';

const imageStyleAtom = atom({
  key: 'imageStyle',
  default: {
    boxStyle: {
      backgroundColor: '#FFFFFF', // 기본값: 흰색
      borderWidth: '0px', // 기본값: 0px, 얇게: 1px, 보통: 2px, 두껍게: 3px
      borderColor: '#000000', // 기본값: 검정색
      borderStyle: 'solid', // solid, dotted, dashed
      paddingTop: '15px', // 기본값: 15px(보통), 없음: 0px, 좁게: 5px, 넓게: 25px,
      paddingBottom: '15px', // paddingTop 과 동일
      paddingLeft: '15px', // 기본값: 15px(보통), 없음: 0px, 좁게: 5px, 넓게: 25px,
      paddingRight: '15px', // paddingLeft 와 동일
      textAlign: 'center', // 버튼정렬 기본값: center(가운데), 왼쪽: left, 오른쪽: right
    },
    contentStyle: {
      maxWidth: '100%', // 사용자 조절값 X
      width: '', // 처음엔 설정 안되어있어서 이미지 본연의 크기로 나오고 100, 200 ~ 600 으로 100px 단위로 설정 가능
    },
  },
});

export default imageStyleAtom;
