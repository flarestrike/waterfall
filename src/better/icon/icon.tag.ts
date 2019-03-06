import { HostBinding, Input, Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { WbIconConfig } from './icon.config';

@Component({
    selector: 'wb-icon',
    template: '',
    styleUrls: ['icon.tag.sass']
})
export class WbIconTag {
    @Input() set x(v) {
      this.prefix = v;
    }
    @Input() set prefix(v) {
        this.family = this.cfg.family(v);
        this._prefix = v;
        this.updateKlass(v, this._name);
    }
    @Input() set name(v) {
        const c = this.cfg.content(this._prefix, v);
        this.content = String.fromCharCode(parseInt(c, 16));
        this._name = v;
        this.updateKlass(this._prefix, v);
    }
    @Input() set class(v) {
        this._class = v;
        this.updateKlass(this._prefix, v);
    }
    @Input() set rotate(v) {
        this.trans = this.dom.bypassSecurityTrustStyle(`rotate(${v}deg)`);
    }
    @HostBinding('style.transform') trans;
    @HostBinding('class') klass = '';
    @HostBinding('attr.data-before') private content = '';
    @HostBinding('style.font-family') private family = '';
    private _prefix = '';
    private _name = 'empty';
    private _class = '';

    constructor(
        private cfg: WbIconConfig,
        private dom: DomSanitizer) {
    }

    private updateKlass(p, n) {
        const mc = p ? `${p}-${n}` : n;
        const v = !!n ? 'visible' : '';
        this.klass = [this._class, mc, v].join(' ');
    }
}
