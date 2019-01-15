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
      console.log('viewer', i)
      this.useInx(i);
    });
  }
  next() {
    i = (i + 1) % views.length;
    this.useInx(i);
  }
  useInx(i) {
    const mod = views[i % views.length];
    const text = this.loc[mod];
    const m = { text, mod, level: i };
    this.mod = m;
    this.event.emit(m);
  }
}
