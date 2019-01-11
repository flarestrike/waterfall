import { Inject, Injectable, InjectionToken } from '@angular/core';

// settings definition explains
// env - development time settings
// config - build time released settings
// options - user level memorable settings
// preference - runtime settings
export class Config {
  dataUrl: string;
}

export const config = new InjectionToken<Config>('CONFIG_TOKEN', {
  providedIn: 'root',
  factory() {
    return new Config();
  }
});

@Injectable({ providedIn: 'root' })
export class Preference {
  constructor(@Inject(config) private cfg: Config) { }
  get all() {
    return this.cfg;
  }
}
