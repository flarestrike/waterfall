import { Input, Renderer2, Inject, Component } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'wu-script',
  template: '',
  styles: [`:host { display: none }`]
})
export class WuScriptTag {
  @Input() set src(v) {
    const s = this.rnd.createElement('script');
    s.async = true;
    s.type = 'text/javascript';
    if (v) {
      s.src = v;
      this.setTag(s);
    }
  }
  private tag;
  constructor(private rnd: Renderer2,
    @Inject(DOCUMENT) private doc: Document) { }

  private setTag(t) {
    this.tryRemoveOldTag();
    this.tag = t;
    this.rnd.appendChild(this.doc.body, t);
  }

  private tryRemoveOldTag() {
    if (!this.tag) { return; }
    this.tag.parentNode.removeChild(this.tag);
  }
}
