import { Component } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Data } from '@mod/utils';

class App {
  top: object;
  lander: object;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'waterfall';
  top = {};
  lander = {};
  constructor(private data: Data) {
    data.app<App>().subscribe(({ top, lander }) => {
      this.top = top;
      this.lander = lander;
    });
  }
}
