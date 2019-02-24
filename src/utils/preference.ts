import { Inject, Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment as env } from '@mod/environments/environment';
import { BaseConfig, LanderConfig } from './config';

const runtimeCfgUrl = 'assets/rt.json';

class ConfigEvent {
  loaded: boolean;
  cfg: BaseConfig;
}

@Injectable({ providedIn: 'root' })
export class Preference {
  loaded = false;
  env = env;
  cfg = new BaseConfig();
  lander = new LanderConfig();
  event = new EventEmitter<ConfigEvent>();
  constructor(private http: HttpClient) {
    http.get(runtimeCfgUrl).subscribe((c: BaseConfig) => {
      this.cfg = c;
      this.loaded = true;
      this.event.emit({ loaded: true, cfg: c });
    });
  }
  get all() {
    if (this.loaded) {
      return of(this.cfg);
    } else {
      return this.event.pipe(map(e => e.cfg));
    }
  }
}
