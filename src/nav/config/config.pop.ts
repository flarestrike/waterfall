import { Output, EventEmitter, Input, Component } from '@angular/core';

import { Config } from './config';
import { LanderOptions, OptionItem } from './lander.options';

@Component({
  selector: 'wc-config-pop',
  templateUrl: './config.pop.html',
  styleUrls: ['./config.pop.sass']
})
export class WcConfigPop {
  options = new LanderOptions();
  item: OptionItem;
  @Input() set data(v) {
    this.options.load(v || new Config());
  }
  @Output() event = new EventEmitter();
  constructor() {
    this.item = this.options[this.options.keys[0]];
  }
  close() {
    this.emit('close');
  }
  select(i) {
    this.item.enable(i);
    this.options.update(this.item);
    const e = { key: this.item.key, config: this.options.config };
    this.emit('update', e);
  }
  itemClick(i) {
    this.item = this.options[i];
  }
  private emit(action, data?) {
    this.event.emit({ action, data });
  }
}
