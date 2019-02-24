import { Injectable, EventEmitter } from '@angular/core';
import { localeKeys as lks, locales as locs } from './locales';

function loc(k) {
  return locs[k] || locs[lks[0]];
}

@Injectable({ providedIn: 'root' })
export class Lang {
  key;
  event = new EventEmitter();
  locales;
  constructor() { }
  use(key) {
    this.key = key;
    const locales = loc(key);
    this.locales = locales;
    this.event.emit({ key, locales });
  }
}
