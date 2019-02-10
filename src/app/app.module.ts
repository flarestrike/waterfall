import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { iconConfig } from '@mod/better';
import { UtilsModule } from '@mod/utils';
import { LayoutModule } from '@mod/layout';
import { NavModule } from '@mod/nav';
import { LanderModule } from '@mod/lander';

import { common } from '../assets/fonts/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment as env } from '@mod/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UtilsModule,
    NavModule,
    LanderModule,
    LayoutModule,
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: env.production })
  ],
  providers: [
    { provide: iconConfig, useValue: { co: common } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
