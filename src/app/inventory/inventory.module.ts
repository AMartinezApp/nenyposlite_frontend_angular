import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { PurchaseComponent } from './pages/purchase/purchase.component';
import { TaxComponent } from './pages/tax/tax.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreComponent } from './pages/store/store.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductPipe } from './pipe/product.pipe';

@NgModule({
  declarations: [
    PurchaseComponent,
    TaxComponent,
    StoreComponent,
    CategoryComponent,
    ProductComponent,
    ProductPipe
  ],
  imports: [CommonModule, InventoryRoutingModule, ReactiveFormsModule],
})
export class InventoryModule {}
