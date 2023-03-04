import { atom } from 'recoil';

const emailTemplateAtom = atom({
  key: 'emailTemplate',
  default: {
    emailBodyStyle: '',
    emailContainerStyle: '',
    emailFooter: '',
    emailContents: [],
  },
});

export default emailTemplateAtom;
