import { HostBinding, Inject, HostListener, Component } from '@angular/core';

@Component({
  selector: 'wl-app-layout',
  templateUrl: 'app.layout.html',
  styleUrls: ['app.layout.sass']
})
export class WlAppLayout {
  tophMax: number;
  toph: number;
  gtop = false;
  wscroll(e) {
    const t = e.target.scrollTop;
    if (!this.tophMax) {
      this.tophMax = e.target.offsetTop;
    }
    this.toph = Math.max(this.tophMax - t, 40);
    this.gtop = this.toph < 41;
  }
}
