import { Component } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Pop } from './pop';

@Component({
  selector: 'wp-pop',
  template: 'popin {{ text }}'
})
export class WpPopTag {
  text = '';
  constructor(private pop: Pop) {
    pop.event.pipe(filter(e => e.type === 'pop')).subscribe(e => {
      this.text = e.pop;
    });
  }
}
