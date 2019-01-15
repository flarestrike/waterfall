export class Locale {
  tech = 'Tech-Stacks';
}

export const locales = {
  en: new Locale(),
  hant: <Locale>{
    tech: '技術棧',
  },
  hans: <Locale>{
    tech: '技术栈'
  },
};
