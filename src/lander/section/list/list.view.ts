import { Input, Component } from '@angular/core';
import { Lang } from '@mod/utils';
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
  loc;
  constructor(
    private ln: Lang,
    private opts: WlViewOptions) {
    super();
    this.data = opts;
    this.update(ln);
    ln.event.subscribe(e => {
      this.update(e);
    });
  }
  private update({ locales: l }) {
    this.loc = l;
  }
}
