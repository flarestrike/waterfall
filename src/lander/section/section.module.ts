import { NgModule } from '@angular/core';

import { WlCommonModule } from './common/common.module';

import { WlSectionTag } from './section.tag';

import { WlViewTag } from './view/view.tag';
import { viewList } from './views';

const tags = [
  WlViewTag,
  WlSectionTag
];

@NgModule({
  imports: [
    WlCommonModule
  ],
  entryComponents: [...viewList],
  declarations: [...viewList, ...tags],
  exports: [...tags]
})
export class WlSectionModule { }
