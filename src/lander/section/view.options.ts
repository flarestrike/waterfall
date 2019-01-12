import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class WlViewOptions {
  opts: any;
  event: EventEmitter<any>;
}
