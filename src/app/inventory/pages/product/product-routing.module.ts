import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedInGuard } from 'src/app/guards/is-logged-in.guard';
import { ProductComponent } from './product.component';

const routes: Routes = [{ path: '', component: ProductComponent, 
canActivate: [IsLoggedInGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
