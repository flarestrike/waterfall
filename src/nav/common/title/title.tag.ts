import { Input, Component } from '@angular/core';

export class Model {
  text: string;
}

@Component({
  selector: 'wn-title',
  templateUrl: './title.tag.html',
  styleUrls: ['./title.tag.sass']
})
export class WnTitleTag extends Model {
  @Input() text = '';
}
