import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { CustomHttp } from './custom-http';
import { Preference } from './preference';
import { Lang } from './lang';
import { Data } from './data';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomHttp, multi: true },
    Preference,
    Lang,
    Data
  ]
})
export class UtilsModule {}
