import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseTag } from './base.tag';

const routes: Routes = [{
  path: '', pathMatch: 'full', redirectTo: '/en'
}, {
  path: ':lang', component: BaseTag
}, {
  path: '**', pathMatch: 'full', redirectTo: '/en'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [BaseTag],
  exports: [RouterModule]
})
export class AppRoutingModule { }
