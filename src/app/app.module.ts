import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { iconConfig } from '@mod/better';
import { UtilsModule, config } from '@mod/utils';
import { LayoutModule } from '@mod/layout';
import { NavModule } from '@mod/nav';
import { LanderModule } from '@mod/lander';

import { common } from '../assets/fonts/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment as env } from '@mod/environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: config, useValue: env },
    { provide: iconConfig, useValue: { co: common } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
