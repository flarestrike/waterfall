import { Input, Component } from '@angular/core';

@Component({
  selector: 'wc-config',
  template: `
    <div class='button' (click)='pop()'>
      <wb-icon x='co' name='cog'></wb-icon>
      <div class='text'> settings </div>
    </div>
    <wc-config-pop [class.on]='popup' (event)='popEvent($event)'></wc-config-pop>
  `,
  styleUrls: ['./config.tag.sass']
})
export class WcConfigTag {
  popup = false;
  @Input() set data(v) {
  }
  pop() {
    this.popup = true;
  }
  popEvent(e) {
    if (e.action === 'close') {
      this.popup = false;
    }
  }
}
