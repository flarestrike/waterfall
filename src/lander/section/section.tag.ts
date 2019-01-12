import { EventEmitter, Injector, Input, Component } from '@angular/core';
import { WlViewOptions } from './view.options';

import { views } from './views';

class Model {
  text = [];
  layout: string;
  views = [];
}

@Component({
  selector: 'wl-section',
  templateUrl: 'section.tag.html',
  styleUrls: ['section.tag.sass']
})
export class WlSectionTag extends Model {
  @Input() set data(v) {
    if (!v) { return; }
    Object.assign(this, v || new Model());
  }
  set views(vs) {
    this._vs = vs.map(({ span, text, type, ...v }) => <any>{ text, span,
      type: views[`Wl${type}View`] || views.unknown,
      injector: Injector.create({
        parent: this.inj, providers: [
          { provide: WlViewOptions, useValue: { ...v, event: this.event } }
        ]
      })
    });
  }
  get views() {
    return this._vs;
  }
  _vs = [];
  event = new EventEmitter();

  constructor(private inj: Injector) {
    super();
  }
}
