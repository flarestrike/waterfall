import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Preference } from './preference';

@Injectable({ providedIn: 'root' })
export class Data {
  constructor(
    private http: HttpClient,
    private pref: Preference) { }
  app<T>(key) {
    const { dataUrl = '' } = this.pref.all;
    const url = dataUrl.replace('lang', `${key}`);
    return this.http.get<T>(url);
  }
}
