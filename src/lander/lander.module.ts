import { NgModule } from '@angular/core';
import { WlLanderTag } from './lander.tag';
const tags = [WlLanderTag];

@NgModule({
  declarations: [ ...tags ],
  exports: [ ...tags ]
})
export class LanderModule {}
