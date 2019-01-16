import { Injectable, EventEmitter } from '@angular/core';
import { locales } from './locales';

@Injectable({ providedIn: 'root' })
export class Lang {
  key;
  event = new EventEmitter();
  locales;
  constructor() { }
  use(key) {
    this.key = key;
    this.locales = locales[key];
    this.event.emit({ key, locales: this.locales });
  }
}
