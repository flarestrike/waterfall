import { Injectable, EventEmitter } from '@angular/core';
import { Lang } from './lang';
import { viewerLocale as locale } from './locales';

const views = ['detailed', 'complete', 'compact', 'rough'];
let i = 0;

@Injectable({ providedIn: 'root' })
export class Viewer {
  mod: 'detailed' | 'complete' | 'compact' | 'rough';
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
  useInx(i) {
    this.use(views[i]);
  }
  use(mod) {
    this.mod = mod;
    const text = this.loc[mod];
    this.event.emit({ text, mod });
  }
}
