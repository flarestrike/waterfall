import { Input, Component } from '@angular/core';

export class Model {
  since: number;
  until: number;
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
    this.ss = this.since + '';
    this.su = this.since + '';
    this.ds = (this.until - this.since) + '';
  }
}
