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
    this._imgs = (v || []).slice(0, 6);
  }
  get imgs() {
    return this._imgs;
  }
  _imgs = [];
  loc = new Locale();
  vue = { detail: false, techs: false };
  constructor(
    private vw: Viewer,
    private ln: Lang) {
    super();
    this.updateLoc(ln.key);
    this.updateVue(vw.mod);
    vw.event.subscribe(e => {
      this.updateVue(e);
    });
    ln.event.subscribe(e => {
      this.updateLoc(e.key);
    });
  }
  private updateVue({ level }) {
    this.vue = { detail: level > 2, techs: level >= 1 };
  }
  private updateLoc(k) {
    this.loc = locales[k];
  }
}
