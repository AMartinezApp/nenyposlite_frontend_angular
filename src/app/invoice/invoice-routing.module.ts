import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditsentryComponent } from './pages/creditsentry/creditsentry.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { InvoicelistComponent } from './pages/invoicelist/invoicelist.component';
import { NcftypeComponent } from './pages/ncftype/ncftype.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'invoice', component: InvoiceComponent },
      { path: 'invoicelist', component: InvoicelistComponent },
      { path: 'devolucionnc', component: CreditsentryComponent },
      { path: 'customer', component: CustomerComponent },
      { path: 'ncf', component: NcftypeComponent },
      
      { path: '**', redirectTo: 'invoicelist' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceRoutingModule {}
