export class Locale {
  birth = 'Birth in ';
  email = 'E-mail';
  now = 'Now at ';
  relocat = 'Will relocate to';
}

export const locales = {
  en: new Locale(),
  hant: <Locale>{
    birth: '',
    email: 'e-mail ',
    now: '目前在',
    relocat: '可能工作地點'
  },
  hans: <Locale>{
    birth: '生于',
    email: 'e-mail ',
    now: '目前在',
    relocat: '可能工作地点'
  }
};
