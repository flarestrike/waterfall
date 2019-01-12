import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Preference } from './preference';

@Injectable({ providedIn: 'root' })
export class Data {
  constructor(
    private http: HttpClient,
    private pref: Preference) { }
  app<T>() {
    return this.http.get<T>(this.pref.all.dataUrl || '');
  }
}
