import { LanderConfig } from '@mod/utils/config';

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
  relocale(loc) {
    ['text', 'desc'].forEach(k => this[k] = loc[k]);
    loc.list.forEach(i => {
      const r: any = this.list.find(j => j.value === i.value);
      if (!r) { return ;}
      r.text = i.text;
    });
  }
}

export class LanderOptions {
  keys = ['fontSize', 'view', 'lang', 'theme'];
  fontSize: OptionItem;
  view: OptionItem;
  lang: OptionItem;
  theme: OptionItem;
  config = new LanderConfig();
  constructor(opts) {
    this.keys.forEach(k => {
      this[k] = new OptionItem(opts[k]);
    });
  }
  relocale(loc) {
    this.keys.forEach(k => {
      this[k].relocale();
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
