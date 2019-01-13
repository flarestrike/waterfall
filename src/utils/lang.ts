import { Injectable, EventEmitter } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Lang {
  key;
  event = new EventEmitter();
  constructor() { }
  use(key) {
    this.key = key;
    this.event.emit({ key });
  }
}
