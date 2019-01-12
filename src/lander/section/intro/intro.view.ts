import { Input, Component } from '@angular/core';
import { WlViewOptions } from '../view.options';

class Location { text: string; lat: number; lng: number; }

class Model {
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
  constructor(private opts: WlViewOptions) {
    super();
    this.data = opts;
  }
}
