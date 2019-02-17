import { Input, Component } from '@angular/core';

@Component({
  selector: 'wc-config',
  template: `
    <div class='button'>
      <wb-icon x='co' name='cog'></wb-icon>
      <div class='text'> settings </div>
    </div>
    <wc-config-pop></wc-config-pop>
  `,
  styleUrls: ['./config.tag.sass']
})
export class WcConfigTag {
  @Input() set data(v) {
  }
}
