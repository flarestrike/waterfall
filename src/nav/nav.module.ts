import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BetterModule } from '@mod/better';
import { WnTopNav } from './top.nav';

const tags = [WnTopNav];
@NgModule({
  imports: [
    CommonModule,
    BetterModule
  ],
  declarations: [ ...tags ],
  exports: [ ...tags ]
})
export class NavModule {}
