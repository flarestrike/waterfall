import { Input, Component } from '@angular/core';

export class BotNav {
  team = '';
}

@Component({
  selector: 'wn-bot-nav',
  template: `
    powered by {{ team }} © all rights reserved
  `,
  styleUrls: ['./bot.nav.sass']
})
export class WnBotNav extends BotNav {
  @Input() set data(v) {
    Object.assign(this, v);
  }
}
