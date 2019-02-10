import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Data, Lang, Title, Gtag } from '@mod/utils';
import { Model as Nav } from '@mod/nav';
import { Model as Lander } from '@mod/lander/lander.tag';

class Model {
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
    private gt: Gtag,
    private router: Router,
    private title: Title,
    private lang: Lang,
    private data: Data) {
    super();
    lang.event.subscribe(e => {
      this.load(e.key);
      gt.config('XX-XXXXXXXXX-1');
    });
  }
  navEvent(e) {
    if (e.type === 'lang') {
      this.router.navigate([e.key]);
    }
  }
  private load(key) {
    this.data.app<Model>(key).subscribe(({ nav, lander }) => {
      this.nav = nav;
      this.lander = lander;
      this.title.setup(nav.title, nav.links);
    });
  }
}
