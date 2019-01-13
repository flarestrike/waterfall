import { Input, Component } from '@angular/core';

class Link {
  text: string;
  hash: string;
}

export class Model {
  links: Link[] = [];
}

@Component({
  selector: 'wn-links',
  templateUrl: './links.tag.html',
  styleUrls: ['./links.tag.sass']
})
export class WnLinksTag extends Model {
  @Input() links: Link[] = [];
}
