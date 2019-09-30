import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductListComponent } from './components/productlist/productlist.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:pId', component: ProductComponent },
  { path: 'products/list', component: ProductListComponent },
  { path: 'cart', component: CartComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
