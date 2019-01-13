import { Inject, InjectionToken, Injectable } from '@angular/core';

interface List {
    [key: string]: string;
}

interface NamedList {
    name: string;
    list: List;
}

export interface NamedLists {
    [prefix: string]: NamedList;
}

const sample = {
    name: 'sample',
    list: {
        empty: '\e900'
    }
};

export const iconConfig = new InjectionToken<NamedLists>('icon-config', {
  providedIn: 'root', factory() { return { sample }; }
});

@Injectable({ providedIn: 'root' })
export class WbIconConfig {
    constructor(@Inject(iconConfig) private ics: NamedLists = {}) {}
    family(v) {
        return this.ics[v].name || 'unknown';
    }
    content(f, k) {
        return this.ics[f].list[k];
    }
}
