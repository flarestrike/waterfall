import { Injectable } from '@angular/core';
import { HttpResponse, HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, of } from 'rxjs';

@Injectable()
export class CustomHttp implements HttpInterceptor {
  intercept(req: HttpRequest<any>, hnd: HttpHandler) {
    // NOTE why { type: 0 }
    return hnd.handle(req)
    .pipe(catchError((e) => {
      if (e.status === 200 && !e.ok) {
        const body = { error: 'server respond with unprocessible response' };
        // https://github.com/angular/angular/issues/24669
        return of(new HttpResponse({ body }));
      }
      return throwError(e);
    }));
  }
}
