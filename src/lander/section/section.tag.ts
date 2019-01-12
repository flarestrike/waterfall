import { Input, Component } from '@angular/core';

class Model {
  text = [];
}

@Component({
  selector: 'wl-section',
  templateUrl: 'section.tag.html'
})
export class WlSectionTag extends Model {
  @Input() set data(v) {
    if (!v) { return; }
    Object.assign(this, v || new Model());
  }
}
