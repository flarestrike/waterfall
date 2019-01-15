import { Component, AfterViewInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Lang, Title } from '@mod/utils';

const langs = ['en', 'hant', 'hans'];
@Component({
  selector: 'app-base',
  template: ''
})
export class BaseTag implements AfterViewInit {
  constructor(
    private vps: ViewportScroller,
    private title: Title,
    private lang: Lang,
    private route: ActivatedRoute) {
    route.params.subscribe(p => {
      // TODO guess from client info
      const ln = langs.indexOf(p.lang) > -1 ? p.lang : 'en';
      lang.use(ln);
    });
  }
  ngAfterViewInit() {
    this.route.fragment.subscribe(f => {
      setTimeout(() => {
        this.title.inPageNav(f);
        this.vps.scrollToAnchor(f);
      }, 200);
    });
  }
}
