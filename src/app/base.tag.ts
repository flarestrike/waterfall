import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Lang } from '@mod/utils';

const langs = ['en', 'hant', 'hans'];
@Component({
  selector: 'app-base',
  template: ''
})
export class BaseTag {
  constructor(
    private vps: ViewportScroller,
    private lang: Lang,
    private route: ActivatedRoute) {
    route.params.subscribe(p => {
      // TODO guess from client info
      const ln = langs.indexOf(p.lang) > -1 ? p.lang : 'en';
      lang.use(ln);
    });
  }
}
