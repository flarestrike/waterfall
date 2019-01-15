import { Input, Component } from '@angular/core';
import { WlViewOptions } from '../view.options';

import { Location, Role, Project } from '../common/modal';

class Model {
  logo: string;
  text: string;
  locations: Location[];
  roles: Role[];
}

@Component({
  selector: 'wl-view-dyn',
  templateUrl: 'stage.view.html',
  styleUrls: ['stage.view.sass']
})
export class WlStageView extends Model {
  @Input() set data(v) {
    if (!v) { return; }
    Object.assign(this, v || new Model());
    const rs = this.roles;
    if (rs.length > 0) {
      const { until } = rs[0].duration;
      const { since } = rs[rs.length - 1].duration;
      this.overall = { since, until };
    }
  }
  overall;
  constructor(private opts: WlViewOptions) {
    super();
    this.data = opts;
  }
}
