 
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { HomeComponent } from './home/pages/home/home.component';
import { PagenotfoundComponent } from './home/pages/pagenotfound/pagenotfound.component';

const routes: Routes = [
   
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path:'home',component: HomeComponent},
  // Inventory modules
  { path: 'product', loadChildren: () => import('./inventory/pages/product/product.module').then(m => m.ProductModule) },
  { path: 'category', loadChildren: () => import('./inventory/pages/category/category.module').then(m => m.CategoryModule) },
  { path: 'tax', loadChildren: () => import('./inventory/pages/tax/tax.module').then(m => m.TaxModule) },
  { path: 'store', loadChildren: () => import('./inventory/pages/store/store.module').then(m => m.StoreModule) },
  { path: 'purchase', loadChildren: () => import('./inventory/pages/purchase/purchase.module').then(m => m.PurchaseModule) },
   // Auth modules
  { path: 'login', loadChildren: () => import('./auth/pages/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./auth/pages/register/register.module').then(m => m.RegisterModule) },
  {path: '**',component: PagenotfoundComponent}
];

 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
