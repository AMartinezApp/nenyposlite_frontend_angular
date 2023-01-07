import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductI } from 'src/app/inventory/models/product';
import { ProductService } from 'src/app/inventory/services/product.service';
import Swal from 'sweetalert2';
import { ItemShopingCar } from '../../models/shoping.car';
import { ShopingCartService } from '../../services/shoping.cart.service';

@Component({
  selector: 'app-shopping-cart-catalog',
  templateUrl: './shopping-cart-catalog.component.html',
  styleUrls: ['./shopping-cart-catalog.component.scss'],
})
export class ShoppingCartCatalogComponent implements OnInit {
  shopingCartForm!: FormGroup;

  @ViewChild('quantity', { static: false })
  quantity!: ElementRef<HTMLInputElement>;
  @ViewChild('discount', { static: false })
  discount!: ElementRef<HTMLInputElement>;
  @ViewChild('txtSearch', { static: false })
  txtSearch!: ElementRef<HTMLInputElement>;

  products: ProductI[] = [];
  product: ProductI[] = [];
  cartItem!: ItemShopingCar;
  page: number = 0;
  totalDoc: number = 0;
  docByPage: number = 1;
  search: string = '';

  constructor(
    private productService: ProductService,
    private shopingCartService: ShopingCartService,
    public readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.shopingCartForm = this.iniForm();
    this.getAll();
  }

  getByBarCode(barcode: string) {
    if (Number(barcode)) {
      this.productService.getByBarCode(barcode).subscribe(
        (res: any) => {
          this.onSelectProduct(res);
        },
        (error) => {
          if ((error.error.result = 'Document not found')) {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'El documento no encontrado',
              showConfirmButton: false,
              timer: 1000,
            });
          }
        }
      );
    }
  }

  getAll() {
    this.productService.getAll().subscribe((res) => {
      this.products = res;
      this.totalDoc = this.products.length;
    });
  }

  iniForm(): FormGroup {
    return this.fb.group({
      id: [0],
      idinvoice: [0],
      idproduct: [0],
      productdetail: ['n/a'],
      price_unit: [0],
      quantity: [0],
      price: [0],
      discount: [0],
      tax: [0],
      cost: [0],
    });
  }

  onSelectProduct(item: ProductI): void {
    this.shopingCartForm.patchValue({ idinvoice: 0 });
    this.shopingCartForm.patchValue({ idproduct: item.id });
    this.shopingCartForm.patchValue({ productdetail: item.name });
    this.shopingCartForm.patchValue({ price_unit: item.price });
    this.shopingCartForm.patchValue({ quantity: 1 });
    this.shopingCartForm.patchValue({ price: item.price });
    this.shopingCartForm.patchValue({ discount: 0 });
    this.shopingCartForm.patchValue({ tax: item.products_tax.value });
    this.shopingCartForm.patchValue({ cost: item.cost });
    this.quantity.nativeElement.focus();
    this.quantity.nativeElement.select();
  }

  addToCart(): void {
    let price =
      this.shopingCartForm.get('price')?.value *
      this.shopingCartForm.get('quantity')?.value;
    let discount = (price * this.shopingCartForm.get('discount')?.value) / 100;
    let tax =
      ((price - discount) * this.shopingCartForm.get('tax')?.value) / 100;
    let totales = price - discount + tax;

    const cartItem: ItemShopingCar = {
      idinvoice: 0,
      idproduct: this.shopingCartForm.get('idproduct')?.value,
      productdetail: this.shopingCartForm.get('productdetail')?.value,
      price_unit: this.shopingCartForm.get('price_unit')?.value,
      quantity: this.shopingCartForm.get('quantity')?.value,
      price,
      discount,
      tax,
      cost: this.shopingCartForm.get('cost')?.value,
      total: totales,
    };
    this.shopingCartService.addItem(cartItem);
    this.txtSearch.nativeElement.select();
    this.txtSearch.nativeElement.focus();
    this.shopingCartForm.reset();
  }
 
  onDiscountSetFocused(): void {
    this.discount.nativeElement.focus();
    this.discount.nativeElement.select();
  }
  nextPage() {
    this.page += this.docByPage;
  }

  prevPage() {
    if (this.page > 0) this.page -= this.docByPage;
  }

  onSearch(search: string) {
    this.page = 0;
    this.search = search;
  }
}
