import { Injectable, ErrorHandler } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ErrorKeeper extends ErrorHandler {
  handleError(e) {
    console.warn('TODO: improve this usage');
    throw e;
  }
}
