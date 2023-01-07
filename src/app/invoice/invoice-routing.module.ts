import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditsentryComponent } from './pages/creditsentry/creditsentry.component';
import { CustomerComponent } from './pages/customer/customer.component'; 
import { InvoicelistComponent } from './pages/invoicelist/invoicelist.component';
import { NcftypeComponent } from './pages/ncftype/ncftype.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'shopping-cart', component: ShoppingCartComponent  },
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
