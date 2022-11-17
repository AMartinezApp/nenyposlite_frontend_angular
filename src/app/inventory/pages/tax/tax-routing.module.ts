import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedInGuard } from 'src/app/guards/is-logged-in.guard';
import { TaxComponent } from './tax.component';

const routes: Routes = [{ path: '', component: TaxComponent, 
canActivate: [IsLoggedInGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxRoutingModule { }
