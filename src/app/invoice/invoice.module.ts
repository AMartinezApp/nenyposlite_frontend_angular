import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { CustomerComponent } from './pages/customer/customer.component';
import { NcftypeComponent } from './pages/ncftype/ncftype.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { InvoicelistComponent } from './pages/invoicelist/invoicelist.component';
import { CreditsentryComponent } from './pages/creditsentry/creditsentry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomerPipe } from './pipe/customer.pipe';
 



@NgModule({
  declarations: [
    CustomerComponent,
    NcftypeComponent,
    InvoiceComponent,
    InvoicelistComponent,
    CreditsentryComponent,
    CustomerPipe 

  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InvoiceModule { }
