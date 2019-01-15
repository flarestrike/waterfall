import { Input, Component } from '@angular/core';
import { Lang, Viewer } from '@mod/utils';

import { Locale, locales } from './locale';
import { Model as Duration } from '../duration/duration.tag';

export class Model {
  text: string;
  duration: Duration;
  imgs = [];
  techstacks: [];
  achievements: [];
}

@Component({
  selector: 'wl-project',
  templateUrl: 'project.tag.html',
  styleUrls: ['project.tag.sass']
})
export class WlProjectTag extends Model {
  @Input() set data(v) {
    if (!v) { return; }
    Object.assign(this, v || new Model());
  }
  set imgs(v) {
    this._imgs = v.splice(0, 6);
  }
  get imgs() {
    return this._imgs;
  }
  get showDetail() {
    return !['compact', 'rough'].includes(this.vw.mod);
  }
  _imgs = [];
  loc = new Locale();
  constructor(
    private vw: Viewer,
    private ln: Lang) {
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
