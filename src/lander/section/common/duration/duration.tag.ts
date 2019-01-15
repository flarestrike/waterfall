import { Input, Component } from '@angular/core';
import { parse, format, subYears } from 'date-fns';
import * as en from 'date-fns/locale/en';
import * as hans from 'date-fns/locale/zh_cn';
import * as hant from 'date-fns/locale/zh_tw';

import { Lang } from '@mod/utils';

export class Model {
  since: number;
  until: number;
}

const locales = { en, hans, hant };
const dlocales = {
  en: '~ Yy, Mm',
  hant: '共 Y年, M個月',
  hans: '共 Y年, M个月'
};

const ys = 31536000;
const ms = 2592000;

function idur(i, j, loc) {
  const d = (Number(parse(j)) - Number(parse(i))) / 1000;
  const r = d % ys;
  let y = Math.floor(d / ys);
  let m = Math.ceil(r / ms);
  if (m === 12) {
    y = y + 1;
    m = 0;
  }
  const s = dlocales[loc].replace('Y', y).replace('M', m);
  if (y === 0) {
    const [a, , c] = s.split(' ');
    return a + c;
  }
  if (m === 0) {
    return s.split(',')[0];
  }
  return s;
}

const fmt = 'MMM, YYYY';

function ifmt(i, loc) {
  return format(parse(i), fmt, { locale: locales[loc] });
}

@Component({
  selector: 'wl-duration',
  template: `
    <wb-icon x='co' name='clock'></wb-icon>
    {{ ss }} ~ {{ su }} ({{ ds }})`,
  styleUrls: ['duration.tag.sass']
})
export class WlDurationTag extends Model {
  lang;
  ss: string;
  su: string;
  ds: string;
  @Input() set data(v) {
    if (!v) { return; }
    const loc = this.lang;
    Object.assign(this, v || new Model());
    this.ss = ifmt(this.since, loc);
    this.su = ifmt(this.until, loc);
    this.ds = idur(this.since, this.until, loc);
  }
  constructor(private ln: Lang) {
    super();
    this.lang = ln.key;
    ln.event.subscribe(e => {
      this.lang = e.key;
    });
  }
}
