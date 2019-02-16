import { Inject, Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment as env } from '@mod/environments/environment';

const runtimeCfgUrl = 'assets/rt.json';
// settings definition explains
// env - development time settings
// config - build time released settings
// options - user level memorable settings
// preference - runtime settings
export class Config {
  team: string;
  dataUrl: string;
  gtag: string;
}

class ConfigEvent {
  loaded: boolean;
  cfg: Config;
}

@Injectable({ providedIn: 'root' })
export class Preference {
  loaded = false;
  env = env;
  cfg = new Config();
  event = new EventEmitter<ConfigEvent>();
  constructor(private http: HttpClient) {
    http.get(runtimeCfgUrl).subscribe((c: Config) => {
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
