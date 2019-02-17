import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { Wnd } from './wnd';
import { CustomHttp } from './custom-http';
import { Preference } from './preference';
import { Viewer } from './viewer';
import { Lang } from './lang';
import { Data } from './data';
import { Gtag } from './gtag';

import { WuUpdateTag } from './update.tag';
import { WuScriptTag } from './script.tag';

const tags = [
  WuUpdateTag,
  WuScriptTag
];

@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [ ...tags ],
  providers: [
    Wnd, Gtag,
    { provide: HTTP_INTERCEPTORS, useClass: CustomHttp, multi: true },
    Preference,
    Viewer, Lang, Data
  ],
  exports: [ ...tags ]
})
export class UtilsModule {}
