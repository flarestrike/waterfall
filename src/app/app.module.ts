import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { iconConfig } from '@mod/better';
import { UtilsModule, ErrorKeeper } from '@mod/utils';
import { LayoutModule } from '@mod/layout';
import { NavModule } from '@mod/nav';
// import { WpPopModule } from '@mod/pop';
import { LanderModule } from '@mod/lander';

import { common } from '../assets/fonts/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment as env } from '@mod/environments/environment';

// todo: move to near window provider
(window || {})['appinfo'] = () => {
  // tslint:disable-next-line:no-console
  console.info(env);
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UtilsModule,
    NavModule,
    // WpPopModule,
    LanderModule,
    LayoutModule,
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: env.production })
  ],
  providers: [
    { provide: ErrorHandler, useClass: ErrorKeeper },
    { provide: iconConfig, useValue: { co: common } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
