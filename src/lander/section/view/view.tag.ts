import { HostBinding, Input, Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

class Model {
  type: string;
  injector: any;
  span: string;
  text: string;
}

@Component({
  selector: 'wl-view',
  templateUrl: 'view.tag.html',
  styleUrls: ['view.tag.sass']
})
export class WlViewTag extends Model {
  @Input() set data(v) {
    if (!v) { return; }
    Object.assign(this, v || new Model());
    this.span = this.dom.bypassSecurityTrustStyle(this.span);
  }
  @HostBinding('style.flex') span;
  constructor(private dom: DomSanitizer) {
    super();
  }
}
