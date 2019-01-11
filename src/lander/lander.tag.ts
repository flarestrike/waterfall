import { Input, Component } from '@angular/core';

@Component({
  selector: 'wl-lander',
  templateUrl: 'lander.tag.html'
})
export class WlLanderTag {
  @Input() data;
}
