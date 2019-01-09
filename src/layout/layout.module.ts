import { NgModule } from '@angular/core';
import { WlAppLayout } from './app.layout';
import { WlPaperLayout } from './paper.layout';

const tags = [
  WlAppLayout,
  WlPaperLayout
];
@NgModule({
  declarations: [
    ...tags
  ],
  exports: [
    ...tags
  ]
})
export class LayoutModule { }

