import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WlSectionTag } from './section.tag';
const tags = [WlSectionTag];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ...tags ],
  exports: [ ...tags ]
})
export class WlSectionModule {}
