import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { SupplierI } from '../../models/supplier';
import { SupplierService } from '../../services/supplier.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {
  supplierForm!: FormGroup;
  suppliers: SupplierI[]=[];

  page: number = 0;
  totalDoc: number = 0;
  search: string = '';

  constructor(private supplierService: SupplierService, public readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.supplierForm =this.iniForm();
    this.getAll();
  }

  iniForm(): FormGroup{
    return this.supplierForm = this.fb.group({
      id: new FormControl(0),
      name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(50)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
      status: new FormControl('A'),
      iduser: new FormControl(0),
    });
  }

  onNewDoc() {
    this.supplierForm.reset();
  }

  getAll(){
    this.supplierService.getAll().subscribe(
      (res)=>{
        this.suppliers = res
        this.totalDoc = this.suppliers.length
      }
    )
  }

  onSave(){
    this.supplierForm.patchValue({ iduser: localStorage.getItem('USER_ID') });
    this.supplierForm.patchValue({ status: 'A' });
    if (this.supplierForm.value.id > 0) {
      // modifying data
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
          this.supplierService
            .onUpdate(this.supplierForm.value)
            .subscribe((res) => {
              this.getAll();
              this.supplierForm.reset();
              this.alertDone();
            });
        }
      });
    } else {
      // saving data
      this.supplierService.onSave(this.supplierForm.value).subscribe((res) => {
        this.getAll();
        this.supplierForm.reset();
        this.alertDone();
      });
    }
  }

  onEdit(supplier: SupplierI){
     // capture data for later editing
     this.supplierForm.patchValue({id: supplier.id})
     this.supplierForm.patchValue({name: supplier.name})
     this.supplierForm.patchValue({phone: supplier.phone})
     this.supplierForm.patchValue({email: supplier.email})
     this.supplierForm.patchValue({ iduser: localStorage.getItem('USER_ID') });
    }

  onUpdateStatus(supplier: SupplierI){
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
        this.onEdit(supplier);
        this.supplierForm.patchValue({ status: 'D' });

        this.supplierService
          .onUpdate(this.supplierForm.value)
          .subscribe((res) => {
            this.getAll();
            this.supplierForm.reset();
            this.alertDone();
          });
      }
    });
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

  nextPage() {
    this.page +=5;
  }

  prevPage() {
    if (this.page > 0)
        this.page -=5;
  }

  onSearch(search: string){
    this.page = 0;
    this.search = search;
  }

}
