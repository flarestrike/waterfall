import { Input, Component } from '@angular/core';
import { WlViewOptions } from '../view.options';

class Model {
}

@Component({
  selector: 'wl-view-dyn',
  template: 'unknown'
})
export class WlUnknownView extends Model {
  @Input() set data(v) {
    if (!v) { return; }
    Object.assign(this, v || new Model());
  }
  constructor(private opts: WlViewOptions) {
    super();
  }
}
