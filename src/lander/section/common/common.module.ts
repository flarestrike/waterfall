import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BetterModule } from '@mod/better';

import { WlLocationTag } from './location/location.tag';
import { WlRoleTag } from './role/role.tag';
import { WlProjectTag } from './project/project.tag';
import { WlDurationTag } from './duration/duration.tag';
import { WlTechTag } from './tech/tech.tag';

const mods = [BetterModule, CommonModule];
const tags = [WlLocationTag, WlRoleTag,
  WlProjectTag, WlDurationTag, WlTechTag];

@NgModule({
  imports: [...mods],
  declarations: [...tags],
  exports: [...tags, ...mods]
})
export class WlCommonModule { }
