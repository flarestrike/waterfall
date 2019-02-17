import { Injectable, EventEmitter } from '@angular/core';

class PopEvent {
  type: string;
  pop: string;
}

@Injectable({ providedIn: 'root' })
export class Pop {
  event = new EventEmitter<PopEvent>();
  open(pop) {
    this.event.emit({ type: 'pop', pop });
  }
}
