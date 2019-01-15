import { Input, Component } from '@angular/core';
import { Lang, Viewer } from '@mod/utils';

import { Model as Duration } from '../duration/duration.tag';
import { Model as Project } from '../project/project.tag';
import { Locale, locales } from './locales';

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
  loc: Locale;
  get showRemarks() {
    return !['compact', 'rough'].includes(this.vw.mod);
  }
  get showProjects() {
    return this.vw.mod !== 'rough';
  }
  constructor(private vw: Viewer, private ln: Lang) {
    super();
    this.updateLoc(ln.key);
    ln.event.subscribe(e => {
      this.updateLoc(e.key);
    });
  }
  private updateLoc(k) {
    this.loc = locales[k];
  }
}
