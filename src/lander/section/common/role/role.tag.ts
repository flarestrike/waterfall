import { Input, Component } from '@angular/core';
import { Model as Duration } from '../duration/duration.tag';
import { Model as Project } from '../project/project.tag';

export class Model {
  text: string;
  kind: number;
  duration: Duration;
  remarkables: string[] = [];
  projects: Project[] = [];
}

@Component({
  selector: 'wl-role',
  templateUrl: 'role.tag.html',
  styleUrls: ['role.tag.sass']
})
export class WlRoleTag extends Model {
  @Input() set data(v) {
    if (!v) { return; }
    Object.assign(this, v || new Model());
  }
}
