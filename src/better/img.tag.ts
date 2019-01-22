import { Input, Component } from '@angular/core';

@Component({
  selector: 'wb-img',
  template: '<img [src]="src"/>',
  styleUrls: ['img.tag.sass']
})
export class WbImgTag {
  @Input() set src(v: string) {
    v = v.startsWith('/') ? `assets/imgs${v}` : v;
    this._src = v || '/assets/mock/empty.png';
  }
  get src() {
    return this._src;
  }
  _src;
}
