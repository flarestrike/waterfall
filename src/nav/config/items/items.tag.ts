import { Input, Output, EventEmitter, Component } from '@angular/core';

@Component({
  selector: 'wc-items',
  templateUrl: './items.tag.html',
  styleUrls: ['./items.tag.sass']
})
export class WcItemsTag {
  @Input() set items(v) {
    this._items = v.slice(0) || [];
    const oi = this.item || {};
    const ion = this._items.find(i => i.key === oi.key) || this._items[0] || {};
    this.use(ion);
  }
  @Output() event = new EventEmitter();
  get items() {
    return this._items;
  }
  item: any = {};
  private _items = [];
  use(i) {
    if (this.item) {
      this.item.on = false;
    }
    i.on = true;
    this.item = i;
    if (this.item.key) {
      this.event.emit({ action: 'useItem', ...i });
    }
  }
}
