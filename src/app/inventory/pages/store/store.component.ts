import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

import { StoreService } from '../../services/store.service';
import { StoreI } from '../../models/store';

// import 'node_modules/sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  storeProductForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    public storesService: StoreService
  ) {}

  ngOnInit(): void {
    this.storeProductForm = this.iniForm();
    this.getAll();
  }

  iniForm(): FormGroup {
    return this.fb.group({
      id: new FormControl(0),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
      ]),
    });
  }

  onSave(): void {
    if (this.storeProductForm.value.id > 0) {
      Swal.fire({
        title: 'Modificar?',
        text: 'Está modificando el documento!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, modificar!',
      }).then((result) => {
        if (result.isConfirmed) {
          this.storesService
            .onUpdate(this.storeProductForm.value)
            .subscribe((res) => {
              this.getAll();
              this.storeProductForm.reset();
            });
            this.alertDone();
        }
      });
    } else {
      this.storesService
        .onSave(this.storeProductForm.value)
        .subscribe((res) => {
          this.getAll();
          this.storeProductForm.reset();
          this.alertDone();
        });
    }
  }

  getAll() {
    this.storesService.getAll().subscribe((res) => {
      this.storesService.stores = res.result;
    }).unsubscribe;
    // Unsubscribing from the observable for optimization of memory usage
  }
  
  onDelete(id: number): void {
    Swal.fire({
      title: 'Borrando el documento',
      text: 'No podrá recuperarlo si lo hace!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, borralo!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.storesService.onDelete(id).subscribe((res) => {
          this.getAll();
          this.storeProductForm.reset();
        });
        this.alertDone();
      }
    });
  }

  onEdit(store: StoreI) {
    // capture data for later editing
    this.storeProductForm.patchValue({ name: store.name });
    this.storeProductForm.patchValue({ id: store.id });
  }

  alertDone() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Operación exitosa',
      showConfirmButton: false,
      timer: 1200,
    });
  }


}
