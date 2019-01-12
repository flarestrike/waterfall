import { Input, Component } from '@angular/core';
import { WlViewOptions } from '../view.options';

import { Location, Role, Project } from '../common/modal';

class Model {
  logo: string;
  text: string;
  locations: Location[];
  roles: Role[];
  projects: Project[];
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
  }
  constructor(private opts: WlViewOptions) {
    super();
    this.data = opts;
  }
}
