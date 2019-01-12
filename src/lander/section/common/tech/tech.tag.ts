import { Input, Component } from '@angular/core';

class Model {
  text: string;
}

@Component({
  selector: 'wl-tech',
  template: 'tech.tag.html'
  // styleUrls: ['tech.tag.sass']
})
export class WlTechTag extends Model {
  @Input() set data(v) {
    if (!v) { return; }
    Object.assign(this, v || new Model());
  }
}
