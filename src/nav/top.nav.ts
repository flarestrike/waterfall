import { Input, Component } from '@angular/core';

class TopNav {
  avatar = '';
  title = '';
  subtitle = '';
  links = [];
}

@Component({
  selector: 'wn-top-nav',
  template: 'top nav - b'
})
export class WnTopNav {
  @Input() set data(v) {
    const { avatar, title, subtitle, links } = v || new TopNav();
  }
}
