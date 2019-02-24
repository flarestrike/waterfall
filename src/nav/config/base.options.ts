import { localeOptions } from '@mod/utils/locales';
export const options = {
  fontSize: {
    key: 'fontSize', icon: 'fontsize', text: 'font size',
    desc: 'adjust font size to fit your screen:',
    list: [{ value: 'small', text: 'Small' },
      { value: 'normal', text: 'Normal' },
      { value: 'large', text: 'Large' },
      { value: 'xlarge', text: 'Extra Large' }]
  },
  view: {
    key: 'view', icon: 'eye', text: 'view mode',
    desc: 'choose how detailed you want to see:',
    list: [
      { value: 0,  text: 'Rough' },
      { value: 10, text: 'Succinct' },
      { value: 20, text: 'Detailed' },
      { value: 30, text: 'Verbose' }]
  },
  lang: {
    key: 'lang', icon: 'language', text: 'language',
    desc: 'multiple languages provided by the author',
    list: localeOptions.slice(0)
  },
  theme: {
    key: 'theme', icon: 'colours', text: 'theme',
    desc: 'pick the right theme for you',
    list: [{ value: 'light', text: 'Light' },
      { value: 'dark', text: 'Dark' },
      { value: 'gentle', text: 'Gentle' },
      { value: 'techy', text: 'Techy' },
      { value: 'artist', text: 'Artist' }]
  }
};
