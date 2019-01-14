import { Input, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  fragment;
  constructor(private route: ActivatedRoute) {
    super();
    route.fragment.subscribe(f => {
      this.fragment = f;
    });
  }
  isFrag(f) {
    return this.fragment === f;
  }
}
