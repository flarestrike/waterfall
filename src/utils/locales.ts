declare var require: any;
const keys = ['en', 'hant', 'hans'];
export const locales = keys.reduce((r, k) =>{
  r[k] = require(`../assets/locale/${k}.json`);
  return r;
}, {});
