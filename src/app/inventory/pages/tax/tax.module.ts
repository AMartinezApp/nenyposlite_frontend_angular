import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxRoutingModule } from './tax-routing.module';
import { TaxComponent } from './tax.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TaxComponent
  ],
  imports: [
    CommonModule,
    TaxRoutingModule,
    ReactiveFormsModule
  ]
})
export class TaxModule { }
