import { HostListener, Input, Component } from '@angular/core';
import { Viewer } from '@mod/utils';

export class Model {
  mod: string;
}

@Component({
  selector: 'wn-view',
  template: `<wb-icon x='co' name='eye'></wb-icon> <div class='text'> {{ text }} </div>`,
  styleUrls: ['./view.tag.sass']
})
export class WnViewTag extends Model {
  text = 'aa';
  constructor(private v: Viewer) {
    super();
    v.event.subscribe(m => {
      this.text = m.text;
    });
  }
  @HostListener('click', ['$event']) nextView() {
    this.v.next();
  }
}
