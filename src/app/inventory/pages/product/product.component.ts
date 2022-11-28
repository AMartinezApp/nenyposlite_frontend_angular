import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { CategoryI } from '../../models/category';
import { ProductI } from '../../models/product';
import { StoreI } from '../../models/store';
import { TaxI } from '../../models/tax';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';
import { StoreService } from '../../services/store.service';
import { TaxService } from '../../services/tax.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  headers = ['Código Barra', 'Nombre', 'Precio', 'Categoría', 'Almacén', 'Acciones'];
  
  categories: CategoryI[]=[]; 
  stores!: StoreI[];
  taxs: TaxI[]=[]; 

  products: ProductI[]=[];

  productForm!: FormGroup;

  page: number = 0;
  totalDoc: number = 0;
  search: string = '';
 
  constructor(
    private readonly fb: FormBuilder,
    public productService: ProductService,
    public categoryService: CategoryService,
    public storeService: StoreService,
    public taxService: TaxService
  ) {}

  ngOnInit(): void {
    this.productForm = this.iniForm();
    this.getAll();
  }

  iniForm(): FormGroup {
    return this.fb.group({
      id: new FormControl(0),
      barcode: new FormControl('', Validators.required),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
      ]),
      cost: new FormControl(0, Validators.required),
      price: new FormControl(0, Validators.required),
      idcategory: new FormControl(0, Validators.required),
      idstore: new FormControl(0, Validators.required),
      idtax: new FormControl(0, Validators.required),
      iduser: new FormControl(0),
    });
  }

  newFormDoc(){
    this.productForm.reset();
  }

  getAll() {
    this.productService.getAll()
    .subscribe(productsRes => {
      this.products = productsRes;
      this.totalDoc = this.products.length;
      // this.documentLength=res.result.length;
      // console.log(res);
    });
    // Unsubscribing from the observable for optimization of memory usage

    // fill categorySelect
    this.getAllCategory();

    // fill storeSelect
    this.getAllStore();

    // fill taxSelect
    this.getAllTax();
  }

  onSave(): void {
    this.productForm.patchValue({ iduser: localStorage.getItem('USER_ID') });
    let closeModal = document.getElementById('cancel');
    if (this.productForm.value.id > 0) {
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
          this.productService
            .onUpdate(this.productForm.value)
            .subscribe((res) => {
              this.getAll();
              this.productForm.reset();
              closeModal?.click();
              this.alertDone();
            });
        }
      });
    } else {
      // saving data
      this.productService.onSave(this.productForm.value).subscribe((res) => {
        this.getAll();
        this.productForm.reset();
        closeModal?.click();
        this.alertDone();
      });
    }
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
        this.productService.onDelete(id).subscribe((res) => {
          this.getAll();
          this.productForm.reset();
        });
        this.alertDone();
      }
    });
  }

  onEdit(product: ProductI) {
    // capture data for later editing
    
      this.productForm.patchValue({ id: product.id });
      this.productForm.patchValue({ barcode: product.barcode });
      this.productForm.patchValue({ name: product.name });
      this.productForm.patchValue({ cost: product.cost });
      this.productForm.patchValue({ price: product.price });
      this.productForm.patchValue({ idcategory: product.products_category.id });
      this.productForm.patchValue({ idstore: product.products_store.id });
      this.productForm.patchValue({ idtax: product.products_tax.id });
     
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

  getAllCategory() {
    this.categoryService.getAll().subscribe((res) => {
      this.categories = res;
    }).unsubscribe;
    // Unsubscribing from the observable for optimization of memory usage
  }

  getAllStore() {
    this.storeService.getAll().subscribe((res) => {
      this.stores = res;
    }).unsubscribe;
    // Unsubscribing from the observable for optimization of memory usage
  }

  getAllTax() {
    this.taxService.getAll().subscribe((res) => {
      this.taxs = res;
    }).unsubscribe;
    // Unsubscribing from the observable for optimization of memory usage
  }

  nextPage() {
    this.page +=10;
  }

  prevPage() {
    if (this.page > 0)
        this.page -=10;
  }

  onSearch(search: string){
    this.page = 0;
    this.search = search;
  }

}
