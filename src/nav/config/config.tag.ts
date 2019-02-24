import { Input, Component, Output, EventEmitter } from '@angular/core';
import { LanderConfig } from '@mod/utils/config';

@Component({
  selector: 'wc-config',
  template: `
    <div class='button' (click)='pop()'>
      <wb-icon x='co' name='cog'></wb-icon>
      <div class='text'> settings </div>
    </div>
    <wc-config-pop [data]='data'
      [class.on]='popup' (event)='popEvent($event)'></wc-config-pop>
  `,
  styleUrls: ['./config.tag.sass']
})
export class WcConfigTag {
  popup = false;
  @Input() set data(v) {
    this._data = v;
  }
  @Output() event = new EventEmitter();
  get data() {
    return this._data;
  }
  _data = new LanderConfig();
  pop() {
    this.popup = true;
  }
  popEvent({ action, data }) {
    if (action === 'update') {
      this.emit(action, data);
    }
    if (action === 'close') {
      this.popup = false;
    }
  }
  private emit(action, data?) {
    this.event.emit({ action, data });
  }
}
