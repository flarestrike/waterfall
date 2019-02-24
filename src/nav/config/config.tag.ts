import { Input, Component, Output, EventEmitter } from '@angular/core';
import { LanderConfig, Lang } from '@mod/utils';

@Component({
  selector: 'wc-config',
  template: `
    <div class='button' (click)='pop()'>
      <wb-icon x='co' name='cog'></wb-icon>
      <div class='text'> {{ text }} </div>
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
  text = '';
  _data = new LanderConfig();
  constructor(private ln: Lang) {
    ln.event.subscribe(e => {
      this.text = e.locales.settings || 'settings';
    });
  }
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
