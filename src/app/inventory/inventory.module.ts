import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InventoryRoutingModule } from './inventory-routing.module';

import { PurchaseComponent } from './pages/purchase/purchase.component';
import { TaxComponent } from './pages/tax/tax.component';
import { StoreComponent } from './pages/store/store.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductComponent } from './pages/product/product.component';
import { SupplierComponent } from './pages/supplier/supplier.component';

import { SupplierPipe } from './pipe/supplier.pipe';
import { ProductPipe } from './pipe/product.pipe';
import { StatusPipe } from '../commons/pipe/status.pipe';

@NgModule({
  declarations: [
    PurchaseComponent,
    TaxComponent,
    StoreComponent,
    CategoryComponent,
    ProductComponent,
    ProductPipe,
    SupplierPipe,
    StatusPipe,
    SupplierComponent
  ],
  imports: [CommonModule, InventoryRoutingModule, ReactiveFormsModule],
})
export class InventoryModule {}
