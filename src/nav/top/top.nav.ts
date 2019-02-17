import { Output, EventEmitter, Input, Component } from '@angular/core';
import { Config } from '../config';

export class Model {
  logo = '';
  text = '';
  config = new Config();
}

@Component({
  selector: 'wn-top-nav',
  templateUrl: './top.nav.html',
  styleUrls: ['./top.nav.sass']
})
export class WnTopNav extends Model {
  @Input() set data(v) {
    if (!v) { return; }
    Object.assign(this, v || new Model());
    this.ready = true;
  }
  @Output() event = new EventEmitter();
  ready = false;
  emit(e) {
    this.event.emit(e);
  }
}
