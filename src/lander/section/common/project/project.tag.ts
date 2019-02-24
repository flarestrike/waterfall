import { Input, Component } from '@angular/core';
import { Lang, Preference } from '@mod/utils';
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
  get vue() {
    const { view } = this.pf.lander;
    return {
      detail: view > 10,
      techs: view > 5
    };
  }
  _imgs = [];
  loc;
  fimg;
  constructor(
    private pf: Preference,
    private ln: Lang) {
    super();
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
  private updateLoc({ locales: l }) {
    this.loc = l;
  }
}
