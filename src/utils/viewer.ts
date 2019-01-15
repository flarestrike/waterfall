import { Injectable, EventEmitter } from '@angular/core';
import { Lang } from './lang';
import { viewerLocale as locale } from './locales';

type ViewMode = 'rough' | 'compact' | 'complete' | 'detailed';
const views: ViewMode[] = ['rough', 'compact', 'complete', 'detailed'];
let i = 3;

@Injectable({ providedIn: 'root' })
export class Viewer {
  mod;
  event = new EventEmitter();
  loc;
  constructor(private ln: Lang) {
    ln.event.subscribe(e => {
      this.loc = locale[e.key];
      this.useInx(i);
    });
  }
  next() {
    i = (i + 1) % views.length;
    this.useInx(i);
  }
  useInx(x) {
    const mod = views[x % views.length];
    const text = this.loc[mod];
    const m = { text, mod, level: x };
    this.mod = m;
    this.event.emit(m);
  }
}
