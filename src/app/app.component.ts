import { Component } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Data } from '@mod/utils';
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
  constructor(private data: Data) {
    super();
    this.load('en');
  }
  navEvent(e) {
    if (e.type === 'lang') {
      this.load(e.key);
    }
  }

  private load(key) {
    this.data.app<App>(key).subscribe(({ nav, lander }) => {
      this.nav = nav;
      this.lander = lander;
    });
  }
}
