import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BetterModule } from '@mod/better';

import { WnViewTag } from './view/view.tag';
import { WnTitleTag } from './title/title.tag';
import { WnLinksTag } from './links/links.tag';
import { WnLangsTag } from './langs/langs.tag';

const mods = [
  CommonModule,
  BetterModule
];
const tags = [WnViewTag, WnLangsTag, WnTitleTag, WnLinksTag];
@NgModule({
  imports: [
    RouterModule,
    ...mods],
  declarations: [...tags],
  exports: [...tags, ...mods]
})
export class WnCommonModule { }