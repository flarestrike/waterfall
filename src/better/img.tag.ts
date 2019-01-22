import { HostBinding, ViewChild, ElementRef, Input, Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'wb-img',
  template: `<img #img (load)='loaded($event)'/>`,
  styleUrls: ['img.tag.sass']
})
export class WbImgTag implements AfterViewInit {
  @ViewChild('img') img: ElementRef;
  @Input() set src(v: string) {
    v = v.startsWith('/') ? `assets/imgs${v}` : v;
    this._src = v || '/assets/mock/empty.png';
  }
  get src() {
    return this._src;
  }
  @HostBinding('class.loading') loading = true;
  private _src;

  constructor(private el: ElementRef) {}
  ngAfterViewInit() {
    const { nativeElement: node } = this.el;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          this.load();
          obs.unobserve(node);
        }
      });
    });
    obs.observe(node);
  }

  loaded(e) {
    this.loading = false;
  }
  private load() {
    if (!this.src) { return; }
    this.img.nativeElement.src = this.src;
  }
}
