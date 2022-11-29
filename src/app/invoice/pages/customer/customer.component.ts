import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { CustomerI } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  customerForm!: FormGroup;
  customers: CustomerI[] = [];

  page: number = 0;
  totalDoc: number = 0;
  search: string = '';
  status: string='Activo';

  constructor(
    private customerService: CustomerService,
    public readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.customerForm = this.iniForm();
    this.getAll();
  }

  iniForm(): FormGroup {
    return this.fb.group({
      id: new FormControl(0),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(50),
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(50),
      ]),
      email: new FormControl('', [
        Validators.email,
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(50),
      ]),
      iduser: new FormControl(0),
    });
  }

  getAll() {
    this.customerService.getAll().subscribe((res) => {
      this.customers = res;
      this.totalDoc = this.customers.length;
    });
  }
  onNewDoc() {
    this.customerForm.reset();
  }

  onSave() {
    this.customerForm.patchValue({ iduser: localStorage.getItem('USER_ID') });
    if (this.customerForm.value.id > 0) {
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
          this.customerService
            .onUpdate(this.customerForm.value)
            .subscribe((res) => {
              this.getAll();
              this.onNewDoc();
              this.alertDone();
            });
        }
      });
    } else {
      this.customerService.onSave(this.customerForm.value).subscribe((res) => {
       
        this.getAll();
        this.onNewDoc();
        this.alertDone();
      });
    }
  }

  onEdit(customer: CustomerI) {
    // capture data for later editing
    this.customerForm.patchValue({ id: customer.id });
    this.customerForm.patchValue({ name: customer.name });
    this.customerForm.patchValue({ phone: customer.phone });
    this.customerForm.patchValue({ email: customer.email });
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

  onUpdateStatus(customer: CustomerI){
    this.customerForm.patchValue({ status: customer.status });
  }


}
