import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { CustomerComponent } from './pages/customer/customer.component';
import { NcftypeComponent } from './pages/ncftype/ncftype.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { InvoicelistComponent } from './pages/invoicelist/invoicelist.component';
import { CreditsentryComponent } from './pages/creditsentry/creditsentry.component';


@NgModule({
  declarations: [
    CustomerComponent,
    NcftypeComponent,
    InvoiceComponent,
    InvoicelistComponent,
    CreditsentryComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule
  ]
})
export class InvoiceModule { }
