import { Input, Component } from '@angular/core';

export class Model {
  text: string;
  lat: number;
  lng: number;
}

@Component({
  selector: 'wl-role',
  template: 'role.tag.html'
  // styleUrls: ['role.tag.sass']
})
export class WlRoleTag extends Model {
  @Input() set data(v) {
    if (!v) { return; }
    Object.assign(this, v || new Model());
  }
}
