import { NgModule } from '@angular/core';

import { WnCommonModule } from './common/common.module';

import { WnTopNav } from './top/top.nav';
import { WnBotNav } from './bot/bot.nav';

const tags = [WnTopNav, WnBotNav];
@NgModule({
  imports: [
    WnCommonModule
  ],
  declarations: [ ...tags ],
  exports: [ ...tags ]
})
export class NavModule {}
