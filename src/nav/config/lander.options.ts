import { LanderConfig } from '@mod/utils/config';

// TODO load from locales
const options = {
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
    list: []
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

class OptionValue {
  klass: string;
  set value(v) {
    this.v = v;
    this.klass = v + '';
  }
  get value() {
    return this.v;
  }
  private v: any;
  on = false;
  constructor(cfg) {
    Object.assign(this, cfg);
  }
}

// TODO split to option-item.ts
export class OptionItem {
  key: 'fontSize' | 'view' | 'lang' | 'theme';
  icon: string;
  text: string;
  desc: string;
  was: OptionValue;
  set list(v) {
    this._list = v.slice(0).map(i => new OptionValue(i));
    this.was = this._list.find(i => i.on);
  }
  get list() {
    return this._list;
  }
  private _list: OptionValue[];
  constructor(cfg) {
    Object.assign(this, cfg);
  }
  use(value) {
    const r = this.list.find(i => i.value === value) || this.list[0];
    if (!r) { return; }
    this.enable(r);
  }
  enable(v) {
    if (this.was) {
      this.was.on = false;
    }
    v.on = true;
    this.was = v;
  }
}

export class LanderOptions {
  keys = ['fontSize', 'view', 'lang', 'theme'];
  fontSize: OptionItem;
  view: OptionItem;
  lang: OptionItem;
  theme: OptionItem;
  config = new LanderConfig();
  constructor() {
    Object.keys(options).forEach(k => {
      this[k] = new OptionItem(options[k]);
    });
  }
  load(cfg) {
    Object.assign(this.config, cfg);
    const ks = Object.getOwnPropertyNames(this.config);
    ks.forEach(k => {
      this[k].use(cfg[k]);
    });
  }
  update(opt: OptionItem) {
    this.config[opt.key] = opt.was.value;
  }
}
