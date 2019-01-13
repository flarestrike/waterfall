import { Input, Component } from '@angular/core';

import { Model as Section } from './section/section.tag';

export class Model {
  sections: Section[] = [];
}

@Component({
  selector: 'wl-lander',
  templateUrl: 'lander.tag.html',
  styleUrls: ['lander.tag.sass']
})
export class WlLanderTag extends Model {
  @Input() set data(v) {
    if (!v) { return; }
    Object.assign(this, v || new Model());
    this.ready = true;
  }
  ready = false;
}
