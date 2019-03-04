import { Inject, Injectable, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Preference, Data, Lang, Gtag } from '@mod/utils';
import { App } from './app';

import { LanderConfig } from '@mod/utils/config';

const config: LanderConfig = {
  fontSize: 'normal',
  view: 20,
  lang: '',
  theme: 'dark'
};

@Injectable({ providedIn: 'root' })
export class Lander {
  gtagLib: string;
  event = new EventEmitter();
  constructor(
    @Inject(DOCUMENT) private doc: Document,
    private pf: Preference,
    private gt: Gtag,
    private title: Title,
    private lang: Lang,
    private data: Data) {
    pf.all.subscribe(({ gtag }) => {
      gt.init(gtag);
      this.gtagLib = gt.url;
    });
    lang.event.subscribe(e => {
      this.load(e.key);
    });
  }
  update(cfg) {
    this.markFont(this.pf.lander, cfg);
    Object.assign(this.pf.lander, cfg);
    // TODO apply/notify changes
  }

  private get bodyClass() {
    return this.doc.body.classList;
  }
  private markFont({ fontSize: ofs }, { fontSize: nfs }) {
    if (this.bodyClass.contains('fs-' + ofs)) {
      this.docFs(ofs);
    }
    this.docFs(nfs);
  }
  private docFs(f) {
    this.bodyClass.toggle('fs-' + f);
  }
  private load(key) {
    this.data.lander<App>(key).subscribe(({ cfg = <any>{}, nav = <any>{}, lander }) => {
      const { title = 'Unknown' } = nav;
      this.title.setTitle(`${title} - ${this.pf.env.appName}`);
      this.gt.config(cfg.gtag);
      const footer = { team: this.pf.cfg.team };
      // TODO load user config.
      config.lang = key;
      nav.config = config;
      this.update(config);
      this.event.emit({ nav, lander, footer });
    });
  }
}
