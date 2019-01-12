import { Input, Component } from '@angular/core';

class Model {
  sections = [];
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
