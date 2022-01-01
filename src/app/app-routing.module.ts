import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { Category1Component } from './category1/category1.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'category1',
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: ':category-name',
    component: Category1Component,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
