import { Output, EventEmitter, Input, Component } from '@angular/core';

import { LanderOptions, OptionItem } from './lander.options';

@Component({
  selector: 'wc-config-pop',
  templateUrl: './config.pop.html',
  styleUrls: ['./config.pop.sass']
})
export class WcConfigPop {
  options = new LanderOptions();
  item: OptionItem;
  @Input() set data(v) {}
  @Output() event = new EventEmitter();
  constructor() {
    this.item = this.options[this.options.keys[0]];
  }
  close() {
    this.emit('close');
  }
  select(i) {
    this.item.select(i);
    this.options.update(this.item);
  }
  itemClick(i) {
    this.item = this.options[i];
  }
  private emit(action, data?) {
    this.event.emit({ action, data });
  }
}
