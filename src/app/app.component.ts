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
    lnd.event.subscribe(e => {
      Object.assign(this, e);
    });
  }
  get gtagLib() {
    return this.lnd.gtagLib;
  }
  navEvent(e) {
    const { type, action, data } = e;
    // TODO emit nav event
    console.log(data);
    // if (key === 'lang') {
    //   this.router.navigate([data[key]]);
    // }
  }
}
