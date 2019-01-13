import { NgModule } from '@angular/core';

import { WnCommonModule } from './common/common.module';

import { WnTopNav } from './top/top.nav';
import { WnSideNav } from './side/side.nav';

const tags = [WnTopNav, WnSideNav];
@NgModule({
  imports: [
    WnCommonModule
  ],
  declarations: [ ...tags ],
  exports: [ ...tags ]
})
export class NavModule {}
