import { HostBinding, Inject, HostListener, Input, Component } from '@angular/core';
import { platformWindow } from '@mod/utils/platform';

export class Model {
  avatar = '';
  title = '';
  links = [];
  langs = [];
}

@Component({
  selector: 'wn-side-nav',
  templateUrl: './side.nav.html',
  styleUrls: ['./side.nav.sass']
})
export class WnSideNav extends Model {
  @Input() set data(v) {
    if (!v) { return; }
    Object.assign(this, v || new Model());
    this.ready = true;
  }
  ready = false;
  @HostBinding('class.on') show = false;
  constructor(@Inject(platformWindow) private wnd: Window) {
    super();
  }
  @HostListener('window:scroll', ['$event']) wscroll(e) {
    this.show = this.wnd.scrollY > 70;
  }
}
