import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Data, Lang } from '@mod/utils';
import { Model as Nav } from '@mod/nav';
import { Model as Lander } from '@mod/lander/lander.tag';

class App {
  nav: Nav;
  lander: Lander;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent extends App {
  title = 'waterfall';
  constructor(
    private router: Router,
    private lang: Lang,
    private data: Data) {
    super();
    lang.event.subscribe(e => {
      this.load(e.key);
    });
  }
  navEvent(e) {
    if (e.type === 'lang') {
      this.router.navigate([e.key]);
      // this.lang.use(e.key);
    }
  }

  private load(key) {
    this.data.app<App>(key).subscribe(({ nav, lander }) => {
      this.nav = nav;
      this.lander = lander;
    });
  }
}
