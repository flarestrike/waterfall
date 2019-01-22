import { Input, Component } from '@angular/core';
// TODO use langs for years
import { WlViewOptions } from '../view.options';

class Model {
  list = [];
  style: 'concat|split';
}

@Component({
  selector: 'wl-view-dyn',
  templateUrl: 'list.view.html',
  styleUrls: ['list.view.sass']
})
export class WlListView extends Model {
  @Input() set data(v) {
    if (!v) { return; }
    Object.assign(this, v || new Model());
  }
  constructor(private opts: WlViewOptions) {
    super();
    this.data = opts;
  }
}
