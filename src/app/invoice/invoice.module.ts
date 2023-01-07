import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvoiceRoutingModule } from './invoice-routing.module';

import { CustomerComponent } from './pages/customer/customer.component';
import { NcftypeComponent } from './pages/ncftype/ncftype.component'; 
import { InvoicelistComponent } from './pages/invoicelist/invoicelist.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { ShoppingCartItemComponent } from './pages/shopping-cart-item/shopping-cart-item.component';
import { ShoppingCartCatalogComponent } from './pages/shopping-cart-catalog/shopping-cart-catalog.component';
import { CreditsentryComponent } from './pages/creditsentry/creditsentry.component';

import { CustomerPipe } from './pipe/customer.pipe';
import { InvoicePipe } from './pipe/invoice.pipe';
import { InvconditionPipe } from './pipe/invcondition.pipe';
import { ProductInvoicePipe } from './pipe/product.pipe';
import { ShoppingCartPaymentComponent } from './pages/shopping-cart-payment/shopping-cart-payment.component';

@NgModule({
  declarations: [
    CustomerComponent,
    NcftypeComponent, 
    InvoicelistComponent,
    CreditsentryComponent,
    CustomerPipe,
    InvoicePipe,
    InvconditionPipe,
    ProductInvoicePipe,
    ShoppingCartComponent,
    ShoppingCartItemComponent,
    ShoppingCartCatalogComponent,
    ShoppingCartPaymentComponent,
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class InvoiceModule {}
