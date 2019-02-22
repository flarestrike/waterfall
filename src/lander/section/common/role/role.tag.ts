import { Input, Component } from '@angular/core';
import { Lang, Viewer } from '@mod/utils';

import { Model as Duration } from '../duration/duration.tag';
import { Model as Project } from '../project/project.tag';

export class Model {
  text: string;
  kind: number;
  duration: Duration;
  remarkables: string[] = [];
  projects: Project[] = [];
}

@Component({
  selector: 'wl-role',
  templateUrl: 'role.tag.html',
  styleUrls: ['role.tag.sass']
})
export class WlRoleTag extends Model {
  @Input() set data(v) {
    if (!v) { return; }
    Object.assign(this, v || new Model());
  }
  loc;
  vue = { remarks: false, projects: false, wide: false };
  constructor(private vw: Viewer, private ln: Lang) {
    super();
    // TODO check need
    // this.updateVue(vw.mod);
    vw.event.subscribe(v => {
      this.updateVue(v);
    });
    this.updateLoc(ln);
    ln.event.subscribe(e => {
      this.updateLoc(e);
    });
  }
  private updateVue({ level }) {
    this.vue = { remarks: level > 1, projects: level > 0, wide: level < 2 };
  }
  private updateLoc({ locales: l }) {
    this.loc = l;
  }
}
