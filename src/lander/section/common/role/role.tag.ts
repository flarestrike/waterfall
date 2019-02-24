import { Input, Component } from '@angular/core';
import { Lang, Preference } from '@mod/utils';

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
  get vue() {
    const { view: v } = this.pf.lander;
    return {
      remarks: v > 10, projects: v > 0, wide: v < 20
    };
  }
  constructor(
    private pf: Preference,
    private ln: Lang) {
    super();
    this.updateLoc(ln);
    ln.event.subscribe(e => {
      this.updateLoc(e);
    });
  }
  private updateLoc({ locales: l }) {
    this.loc = l;
  }
}
