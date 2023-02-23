import { atom } from 'recoil';

const emailTitleAtom = atom({
  key: 'emailTitle',
  default: '제목없음',
});

export default emailTitleAtom;
