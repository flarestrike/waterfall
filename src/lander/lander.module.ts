import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WlSectionModule } from './section';
import { WlLanderTag } from './lander.tag';

const tags = [WlLanderTag];

@NgModule({
  imports: [
    CommonModule,
    WlSectionModule
  ],
  declarations: [ ...tags ],
  exports: [ ...tags ]
})
export class LanderModule {}
