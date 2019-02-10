import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Preference, Data, Lang, Title, Gtag } from '@mod/utils';
import { Model as Nav } from '@mod/nav';
import { Model as Lander } from '@mod/lander/lander.tag';

class UserConfig {
  gtag: string;
}

class Model {
  cfg: UserConfig;
  nav: Nav;
  lander: Lander;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent extends Model {
  constructor(
    private pf: Preference,
    private gt: Gtag,
    private router: Router,
    private title: Title,
    private lang: Lang,
    private data: Data) {
    super();
    pf.all.subscribe(({ gtag }) => {
      gt.init(gtag);
    });
    lang.event.subscribe(e => {
      this.load(e.key);
    });
  }
  navEvent(e) {
    if (e.type === 'lang') {
      this.router.navigate([e.key]);
    }
  }
  private load(key) {
    this.data.app<Model>(key).subscribe(({ cfg, nav, lander }) => {
      this.title.setup(nav.title, nav.links);
      this.nav = nav;
      this.lander = lander;
      this.gt.config(cfg.gtag);
    });
  }
}
