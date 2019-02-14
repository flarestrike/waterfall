import { NgModule } from '@angular/core';

import { WnCommonModule } from './common/common.module';

import { WnTopNav } from './top/top.nav';

const tags = [WnTopNav];
@NgModule({
  imports: [
    WnCommonModule
  ],
  declarations: [ ...tags ],
  exports: [ ...tags ]
})
export class NavModule {}
