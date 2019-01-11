import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UtilsModule, config } from '@mod/utils';
import { LayoutModule } from '@mod/layout';
import { NavModule } from '@mod/nav';
import { LanderModule } from '@mod/lander';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    AppRoutingModule
  ],
  providers: [
    { provide: config, useValue: env }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
