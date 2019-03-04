import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BetterModule } from '@mod/better';

import { WnTitleTag } from './title/title.tag';
import { WnLinksTag } from './links/links.tag';

const mods = [
  CommonModule,
  BetterModule
];
const tags = [WnTitleTag, WnLinksTag];
@NgModule({
  imports: [
    RouterModule,
    ...mods],
  declarations: [...tags],
  exports: [...tags, ...mods]
})
export class WnCommonModule { }
