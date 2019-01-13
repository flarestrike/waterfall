import { Input, Component } from '@angular/core';
import { parse, format, subYears } from 'date-fns';

export class Model {
  since: number;
  until: number;
}

const ys = 31536000;
const ms = 2592000;

function idur(i, j) {
  const d = (Number(parse(j)) - Number(parse(i))) / 1000;
  const r = d % ys;
  return `~ ${Math.floor(d / ys)}y, ${Math.ceil(r / ms)}m`;
}

const fmt = 'MMM, YYYY';

function ifmt(i) {
  return format(parse(i), fmt);
}

@Component({
  selector: 'wl-duration',
  template: `
    <wb-icon x='co' name='clock'></wb-icon>
    {{ ss }} ~ {{ su }} ({{ ds }})`,
  styleUrls: ['duration.tag.sass']
})
export class WlDurationTag extends Model {
  ss: string;
  su: string;
  ds: string;
  @Input() set data(v) {
    if (!v) { return; }
    Object.assign(this, v || new Model());
    this.ss = ifmt(this.since);
    this.su = ifmt(this.until);
    this.ds = idur(this.since, this.until);
  }
}
