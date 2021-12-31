import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Category1Component } from './category1/category1.component';

const routes: Routes = [{
  path:'',component:Category1Component
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
