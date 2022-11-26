 
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { IsLoggedInGuard } from './guards/is-logged-in.guard';
import { HomeComponent } from './home/pages/home/home.component';
import { PagenotfoundComponent } from './home/pages/pagenotfound/pagenotfound.component';

const routes: Routes = [
   
  {path: '', redirectTo:'auth', pathMatch: 'full'},
  {path:'home',component: HomeComponent},
  // Inventory modules
  { path: 'inventory', loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryModule), canActivate: [IsLoggedInGuard] }, 
   // Auth modules
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
   
  {path: '**',component: PagenotfoundComponent}
];

// , 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
