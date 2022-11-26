import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './pages/category/category.component';
import { ProductComponent } from './pages/product/product.component';
import { PurchaseComponent } from './pages/purchase/purchase.component';
import { StoreComponent } from './pages/store/store.component';
import { TaxComponent } from './pages/tax/tax.component';

const routes: Routes = [{
  path: '',
    children: [
      { path: 'product', component: ProductComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'store', component: StoreComponent },
      { path: 'tax', component: TaxComponent },
      { path: 'purchase', component: PurchaseComponent },
       
      { path: '**', redirectTo: 'product' },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
