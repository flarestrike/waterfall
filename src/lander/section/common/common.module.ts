import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WlLocationTag } from './location/location.tag';
import { WlRoleTag } from './role/role.tag';
import { WlProjectTag } from './project/project.tag';
import { WlDurationTag } from './duration/duration.tag';
import { WlTechTag } from './tech/tech.tag';

const tags = [WlLocationTag, WlRoleTag,
  WlProjectTag, WlDurationTag, WlTechTag];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...tags],
  exports: [...tags, CommonModule]
})
export class WlCommonModule { }
