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
  theme: 'gentle'
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
    this.markBody('fs', 'fontSize', this.pf.lander, cfg);
    this.markBody('tm', 'theme', this.pf.lander, cfg);
    Object.assign(this.pf.lander, cfg);
    // TODO apply/notify changes
  }

  private get bodyClass() {
    return this.doc.body.classList;
  }
  private markBody(key, field, ov, nv) {
    const nk = key + '-' + nv[field];
    const ok = key + '-' + ov[field];
    if (this.bodyClass.contains(ok)) {
      this.bodyKlass(ok);
    }
    this.bodyKlass(nk);
  }
  private bodyKlass(k) {
    this.bodyClass.toggle(k);
  }
  private load(key) {
    this.data.lander<App>(key).subscribe(({ cfg = <any>{}, nav = <any>{}, lander }) => {
      const { title = 'Unknown' } = nav;
      this.title.setTitle(`${title} - ${this.pf.env.appName}`);
      this.gt.config(cfg.gtag);
      const footer = { team: this.pf.cfg.team };
      this.loadConfig(key, nav);
      this.update(nav.config);
      this.event.emit({ nav, lander, footer });
    });
  }
  private loadConfig(key, nav) {
      // TODO load user config.
      const { lander: lnd } = this.pf;
      const c = lnd.lang ? lnd : config;
      c.lang = key;
      nav.config = c;
  }
}
