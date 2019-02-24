import { Output, EventEmitter, Input, Component } from '@angular/core';

import { Lang, LanderConfig } from '@mod/utils';
import { LanderOptions, OptionItem } from './lander.options';
import { options } from './base.options';

@Component({
  selector: 'wc-config-pop',
  templateUrl: './config.pop.html',
  styleUrls: ['./config.pop.sass']
})
export class WcConfigPop {
  options = new LanderOptions(options);
  item: OptionItem;
  @Input() set data(v) {
    this.options.load(v || new LanderConfig());
  }
  @Output() event = new EventEmitter();
  constructor(private ln: Lang) {
    this.item = this.options[this.options.keys[0]];
    ln.event.subscribe(e => {
      this.options.relocale(e.locales.config);
    });
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
