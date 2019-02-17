import { NgModule } from '@angular/core';

import { WpPopTag } from './pop.tag';

const tags = [WpPopTag];

@NgModule({
  declarations: [WpPopTag],
  exports: [...tags]
})
export class WpPopModule { }
