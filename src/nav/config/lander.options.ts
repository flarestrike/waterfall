const options = {
  fontSize: {
    key: 'fontSize', icon: 'fontsize', text: 'font size',
    desc: 'adjust font size to fit your screen:',
    list: [{ value: 'small', text: 'Small' },
      { value: 'normal', text: 'Normal', on: true },
      { value: 'large', text: 'Large' },
      { value: 'xlarge', text: 'Extra Large' }]
  },
  view: {
    key: 'view', icon: 'eye', text: 'view mode',
    desc: 'choose how detailed you want to see:',
    list: [{ value: 'rough', text: 'Rough' },
      { value: 'succinct', text: 'Succinct' },
      { value: 'detailed', text: 'Detailed', on: true },
      { value: 'verbose', text: 'Verbose' }]
  },
  lang: {
    key: 'lang', icon: 'language', text: 'language',
    desc: 'multiple languages provided by the author',
    list: []
  },
  theme: {
    key: 'theme', icon: 'colours', text: 'theme',
    desc: 'pick the right theme for you',
    list: [{ value: 'light', text: 'Light', on: true },
      { value: 'dark', text: 'Dark' },
      { value: 'gentle', text: 'Gentle' },
      { value: 'techy', text: 'Techy' },
      { value: 'artist', text: 'Artist' }]
  }
};

class OptionValue {
  value: any;
  on = false;
  constructor(cfg) {
    Object.assign(this, cfg);
  }
}

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
  select(v) {
    if (this.was) {
      this.was.on = false;
    }
    v.on = true;
    this.was = v;
  }
}

class Config {
  fontSize = 'normal';
  view = 'detailed';
  lang = '';
  theme = 'light';
}

export class LanderOptions {
  keys = ['fontSize', 'view', 'lang', 'theme'];
  fontSize: OptionItem;
  view: OptionItem;
  lang: OptionItem;
  theme: OptionItem;
  config = new Config();
  constructor() {
    Object.keys(options).forEach(k => {
      this[k] = new OptionItem(options[k]);
    });
  }
  update(opt: OptionItem) {
    this.config[opt.key] = opt.was.value;
  }
}
