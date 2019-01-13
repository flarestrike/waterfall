import { HostBinding, Input, Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

export class Model {
  type: string;
  injector: any;
  span: string;
  text: string;
  icon: string;
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
