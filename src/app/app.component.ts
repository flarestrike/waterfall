import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Lander } from './lander';
import { App } from './app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent extends App {
  constructor(
    private router: Router,
    private lnd: Lander) {
    super();
    lnd.event.subscribe(({ nav, lander }) => {
      this.nav = nav;
      this.lander = lander;
    });
  }
  get gtagLib() {
    return this.lnd.gtagLib;
  }
  navEvent(e) {
    if (e.type === 'lang') {
      this.router.navigate([e.key]);
    }
  }
}
