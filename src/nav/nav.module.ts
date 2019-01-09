import { NgModule } from '@angular/core';
import { WnTopNav } from './top.nav';

const tags = [WnTopNav];
@NgModule({
  declarations: [ ...tags ],
  exports: [ ...tags ]
})
export class NavModule {}
