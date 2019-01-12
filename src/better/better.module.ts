import { NgModule } from '@angular/core';
import { WbImgTag } from './img.tag';

const tags = [WbImgTag];
@NgModule({
  declarations: [ ...tags ],
  exports: [ ...tags ]
})
export class BetterModule {}
