import { Input, Component } from '@angular/core';
import { Lang, Viewer } from '@mod/utils';
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
  loc;
  vue = { detail: false, techs: false };
  fimg;
  constructor(
    private vw: Viewer,
    private ln: Lang) {
    super();
    this.updateVue(vw.mod);
    vw.event.subscribe(e => {
      this.updateVue(e);
    });
    this.updateLoc(ln);
    ln.event.subscribe(e => {
      this.updateLoc(e);
    });
  }
  pop(i) {
    this.fimg = i;
  }
  popEvent({ action }) {
    if (action === 'next') {
      this.shiftImg(1);
    } else if (action === 'prev') {
      this.shiftImg(-1);
    } else if (action === 'close') {
      this.fimg = null;
    }
  }
  private shiftImg(d) {
    const list = this.imgs;
    const len = list.length;
    const i = (list.indexOf(this.fimg) + d + len) % len;
    this.fimg = list[i];
  }
  private updateVue({ level }) {
    this.vue = { detail: level > 2, techs: level >= 1 };
  }
  private updateLoc({ locales: l }) {
    this.loc = l;
  }
}
