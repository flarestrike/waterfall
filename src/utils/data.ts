import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Preference } from './preference';
import { flatMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class Data {
  constructor(
    private http: HttpClient,
    private pref: Preference) { }
  app<T>(key) {
    return this.pref.all.pipe(flatMap(({ dataUrl }) => {
      const url = dataUrl.replace('lang', `${key}`);
      return this.http.get<T>(url);
    }));
  }
}
