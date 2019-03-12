import { ViewChild, ElementRef, AfterViewInit,
  HostBinding, Inject, HostListener, Component } from '@angular/core';
import { platformWindow } from '@mod/utils';

@Component({
  selector: 'wl-app-layout',
  templateUrl: 'app.layout.html',
  styleUrls: ['app.layout.sass']
})
export class WlAppLayout implements AfterViewInit {
  @HostBinding('style.padding-top.px') dmax: number;
  @ViewChild('top', { read: ElementRef }) top: ElementRef;
  @ViewChild('topc', { read: Component }) topc: Component;
  toph: number;
  gtop = false;
  constructor(@Inject(platformWindow) private wnd: Window) {}
  @HostListener('window:resize', ['$event']) wresize(e) {
    this.update(this.wnd.scrollY);
  }
  @HostListener('window:scroll', ['$event']) wscroll(e) {
    this.update(this.wnd.scrollY);
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.dmax = this.top.nativeElement.clientHeight;
    });
  }
  private update(y) {
    const dmin = this.wnd.innerWidth >= 600 ? 50 : 80;
    this.toph = Math.max(this.dmax - y, dmin);
    this.gtop = this.toph <= dmin;
    this.top.nativeElement.childNodes.forEach(c => {
      if (!c.classList) { return; }
      if (this.gtop) {
        c.classList.add('min');
      } else {
        c.classList.remove('min');
      }
    });
  }
}
