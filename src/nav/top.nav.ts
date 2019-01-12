import { Input, Component } from '@angular/core';

class TopNav {
  avatar = '';
  title = '';
  subtitle = '';
  links = [];
}

@Component({
  selector: 'wn-top-nav',
  templateUrl: './top.nav.html',
  styleUrls: ['./top.nav.sass']
})
export class WnTopNav extends TopNav {
  @Input() set data(v) {
    if (!v) { return; }
    Object.assign(this, v || new TopNav());
    this.ready = true;
  }
  ready = false;
}
