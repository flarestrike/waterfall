export const localeOptions = [{
  value: 'en', text: 'English'
}, {
  value: 'hant', text: '正體中文'
}, {
  value: 'hans', text: '簡体中文'
}];
export const localeKeys = localeOptions.map(i => i.value);

// TODO load locales runtime when files getting larger
declare var require: any;
export const locales = localeKeys.reduce((r, k) => {
  r[k] = require(`../assets/locale/${k}.json`);
  return r;
}, {});
