import { Input, Component } from '@angular/core';

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
}
