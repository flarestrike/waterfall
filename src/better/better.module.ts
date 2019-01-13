import { NgModule } from '@angular/core';

import { WbImgTag } from './img.tag';
import { WbIconModule } from './icon/icon.module';

const tags = [WbImgTag];
@NgModule({
  imports: [
    WbIconModule
  ],
  declarations: [ ...tags ],
  exports: [ ...tags, WbIconModule ]
})
export class BetterModule {}
