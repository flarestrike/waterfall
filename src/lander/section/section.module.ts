import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WlSectionTag } from './section.tag';

import { WlViewTag } from './view/view.tag';
import { viewList } from './views';

const tags = [
  WlViewTag,
  WlSectionTag
];

@NgModule({
  imports: [
    CommonModule
  ],
  entryComponents: [...viewList],
  declarations: [...viewList, ...tags],
  exports: [...tags]
})
export class WlSectionModule { }
