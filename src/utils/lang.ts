import { Injectable, EventEmitter } from '@angular/core';
import { localeKeys as lks, locales } from './locales';

function loc(k) {
  return locales[k] || locales[lks[0]];
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
