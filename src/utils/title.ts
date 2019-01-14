import { Injectable } from '@angular/core';
import { Title as NgTitle } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class Title {
  base = '';
  sec = '';
  fragments = [];
  constructor(private title: NgTitle) {}
  setup(base, list) {
    this.base = base;
    this.fragments = list;
    this.title.setTitle(base);
  }
  inPageNav(e) {
    const f = this.fragments.find(f => f.hash === e) || {};
    this.title.setTitle(`${this.base} - ${f.text}`);
  }
}
