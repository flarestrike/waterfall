import { Input, Component } from '@angular/core';

export class Model {
  text: string;
  lat: number;
  lng: number;
}

@Component({
  selector: 'wl-location',
  template: `<wb-icon x='co' name='pin'></wb-icon> {{ text }}`,
  styleUrls: ['location.tag.sass']
})
export class WlLocationTag extends Model {
  @Input() set data(v) {
    if (!v) { return; }
    Object.assign(this, v || new Model());
  }
}
