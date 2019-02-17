import { Output, EventEmitter, Input, Component } from '@angular/core';

const icons = ['world', 'trophy', 'award', 'msg', 'share'];
const texts = ['font size', 'details', 'language', 'theme', 'shortcuts'];
const items = ['fontSize', 'view', 'lang', 'theme', 'shortcut'].map((k, i) => {
  return { name: k, text: texts[i], icon: icons[i] };
});

@Component({
  selector: 'wc-config-pop',
  templateUrl: './config.pop.html',
  styleUrls: ['./config.pop.sass']
})
export class WcConfigPop {
  items = items;
  view = '';
  @Input() set data(v) {}
  @Output() event = new EventEmitter();
  close() {
    this.emit('close');
  }

  itemClick(i) {
    this.view = i.name;
  }
  private emit(action, data?) {
    this.event.emit({ action, data });
  }
}
