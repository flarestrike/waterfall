import { Injectable, Inject } from '@angular/core';
import { Wnd } from './wnd';

const key = 'dataLayer';
const libUrl = 'https://www.googletagmanager.com/gtag/js?id=ID';

@Injectable({ providedIn: 'root' })
export class Gtag {
  url = '';
  constructor(private wnd: Wnd) {
    this.wnd.init(key, []);
    this.cmd('js', new Date());
  }

  init(id) {
    this.config(id);
    this.url = libUrl.replace('ID', id);
  }

  config(id) {
    this.cmd('config', id);
  }

  cmd(...any) {
    const cmd = this.wnd.get(key);
    cmd.push(arguments);
  }
}
