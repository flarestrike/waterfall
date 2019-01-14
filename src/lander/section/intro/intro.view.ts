import { Input, Component } from '@angular/core';
import { Lang } from '@mod/utils';

import { Locale, locales } from './locales';
import { WlViewOptions } from '../view.options';

class Location { text: string; lat: number; lng: number; }

class Model {
  me: string;
  name: string;
  gender: 'male|female';
  birth: string;
  email: string;
  location: Location;
  relocations: Location[];
}

@Component({
  selector: 'wl-view-dyn',
  templateUrl: 'intro.view.html',
  styleUrls: ['intro.view.sass']
})
export class WlIntroView extends Model {
  @Input() set data(v) {
    if (!v) { return; }
    Object.assign(this, v || new Model());
  }
  loc = new Locale();
  constructor(
    private ln: Lang,
    private opts: WlViewOptions) {
    super();
    this.data = opts;
    this.update(ln.key);
    ln.event.subscribe(e => {
      this.update(e.key);
    });
  }
  private update(k) {
    this.loc = locales[k];
  }
}
