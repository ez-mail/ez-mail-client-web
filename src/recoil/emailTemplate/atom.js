import { atom } from 'recoil';

const emailTemplateDataAtom = atom({
  key: 'emailTemplateData',
  default: {
    emailBodyStyle: '',
    emailContainerStyle: '',
    emailFooter: '',
    emailContents: [],
  },
});

export default emailTemplateDataAtom;
