import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { CategoryI } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categoryProductForm!: FormGroup;
  categories: CategoryI[] = [];

  constructor(
    private readonly fb: FormBuilder,
    public categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.categoryProductForm = this.iniForm();
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
      status: new FormControl('A'),
    });
  }
  onNewDoc() {
    this.categoryProductForm.reset();
  }

  onSave(): void {
    if (this.categoryProductForm.value.id > 0) {
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
          this.categoryService
            .onUpdate(this.categoryProductForm.value)
            .subscribe((res) => {
              this.getAll();
              this.categoryProductForm.reset();
              this.alertDone();
            });
        }
      });
    } else {
      this.categoryService
        .onSave(this.categoryProductForm.value)
        .subscribe((res) => {
          this.getAll();
          this.onNewDoc();
          this.alertDone();
        });
    }
  }

  getAll() {
    this.categoryService.getAll().subscribe((res) => {
      this.categories = res;
    });
  }
  
  onEdit(category: CategoryI) {
    // capture data for later editing
    this.categoryProductForm.patchValue({ name: category.name });
    this.categoryProductForm.patchValue({ id: category.id });
  }
  
  // (click)="onUdateStatus(category)"
  onUdateStatus(category: CategoryI): void {
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
        this.onEdit(category);
        this.categoryProductForm.patchValue({ status: 'D' });

        this.categoryService
          .onUpdate(this.categoryProductForm.value)
          .subscribe((res) => {
            this.getAll();
            this.categoryProductForm.reset();
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
}
