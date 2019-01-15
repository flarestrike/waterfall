import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { CustomHttp } from './custom-http';
import { Preference } from './preference';
import { Viewer } from './viewer';
import { Lang } from './lang';
import { Data } from './data';
import { Title } from './title';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomHttp, multi: true },
    Preference,
    Viewer, Title, Lang, Data
  ]
})
export class UtilsModule {}
