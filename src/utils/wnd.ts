import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { platformWindow } from './platform';

@Injectable({ providedIn: 'root' })
export class Wnd {
  raw: Window|Object;
  constructor(@Inject(platformWindow) pwnd: Window, @Inject(PLATFORM_ID) pid){
    if (isPlatformBrowser(pid)) {
      this.raw = pwnd || {};
    } else if (isPlatformServer(pid)) {
      this.raw = {};
    }
  }

  init(key, value) {
    this.raw[key] = this.raw[key] || value;
  }

  get(key) {
    return this.raw[key];
  }
}
