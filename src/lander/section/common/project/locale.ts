export class Locale {
  tech = 'Tech-Stacks';
}

export const locales = {
  en: new Locale(),
  hant: <Locale>{
    tech: '使用技術',
  },
  hans: <Locale>{
    tech: '技术栈'
  },
};
