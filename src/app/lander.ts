import { Injectable, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Preference, Data, Lang, Gtag } from '@mod/utils';
import { App } from './app';

const config = {
  fontSize: 'large',
  view: 'detailed',
  lang: '',
  theme: 'dark'
};

@Injectable({ providedIn: 'root' })
export class Lander {
  gtagLib: string;
  event = new EventEmitter();
  constructor(
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
  config(cfg) {
    // TODO update config
    // TODO apply/notify changes
  }
  private load(key) {
    this.data.lander<App>(key).subscribe(({ cfg = <any>{}, nav = <any>{}, lander }) => {
      const { title = 'Unknown' } = nav;
      this.title.setTitle(`${title} - ${this.pf.env.appName}`);
      this.gt.config(cfg.gtag);
      const footer = { team: this.pf.cfg.team };
      // TODO load user config
      nav.config = config;
      this.event.emit({ nav, lander, footer });
    });
  }
}
