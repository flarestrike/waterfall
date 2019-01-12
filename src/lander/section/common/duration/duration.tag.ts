import { Input, Component } from '@angular/core';

class Model {
  since: number;
  until: number;
}

@Component({
  selector: 'wl-duration',
  template: 'duration.tag.html'
  // styleUrls: ['duration.tag.sass']
})
export class WlDurationTag extends Model {
  @Input() set data(v) {
    if (!v) { return; }
    Object.assign(this, v || new Model());
  }
}
