import { Output, EventEmitter, Input, Component } from '@angular/core';

class Lang {
  text: string;
  url: string;
}

export class Model {
  langs: Lang[] = [];
}

@Component({
  selector: 'wn-langs',
  templateUrl: './langs.tag.html',
  styleUrls: ['./langs.tag.sass']
})
export class WnLangsTag extends Model {
  @Input() langs: Lang[] = [];
  @Output() event = new EventEmitter();
  use({ key }) {
    this.event.emit({ type: 'lang', key });
  }
}
