import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { CustomerI } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';
import { ShopingCartService } from '../../services/shoping.cart.service';

@Component({
  selector: 'app-shopping-cart-payment',
  templateUrl: './shopping-cart-payment.component.html',
  styleUrls: ['./shopping-cart-payment.component.scss'],
})
export class ShoppingCartPaymentComponent implements OnInit {
  paymentForm!: FormGroup;
  cartItems$ = this.shopingCartService.items$;
  price$ = this.shopingCartService.price$;
  discount$ = this.shopingCartService.discount$;
  tax$ = this.shopingCartService.tax$;
  total$ = this.shopingCartService.total$;

  received: number = 0;
  returned: number = 0;

  sumRecibe(mount: string) {
    this.received = Number(this.paymentForm.value.cash ) + Number(this.paymentForm.value.transfer) + Number(this.paymentForm.value.check) + Number(this.paymentForm.value.deposit)+ Number(this.paymentForm.value.debitcard)+ Number(this.paymentForm.value.creditcard)
    // this.received = + Number(mount);
    this.returned = - this.received;
  }

  customerForm!: FormGroup;
  customers: CustomerI[] = [];

  page: number = 0;
  docByPage: number = 1;
  totalDoc: number = 0;
  search: string = '';
  status: string = 'Activo';


  constructor(
    private customerService: CustomerService,
    private shopingCartService: ShopingCartService,
    public readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.paymentForm = this.iniForm();
    this.getAll();
  }

  iniForm(): FormGroup { 
    return this.fb.group({
      cash: [0, Validators.required],
      transfer: [0, Validators.required],
      debitcard: [0, Validators.required],
      creditcard: [0, Validators.required],
      deposit: [0, Validators.required],
      check: [0, Validators.required],
      nota: [0, Validators.required]
    });
  }

  getAll() {
    this.customerService.getAll().subscribe((res) => {
      this.customers = res;
      this.totalDoc = this.customers.length;
    });
  }

  nextPage() {
    this.page += 1;
  }

  prevPage() {
    if (this.page > 0) this.page -= 1;
  }

  onSearch(search: string) {
    this.page = 0;
    this.search = search;
  }

  onSelectProduct(item: CustomerI): void {
    this.customerForm.patchValue({ id: item.id });
    this.customerForm.patchValue({ name: item.name });
    this.customerForm.patchValue({ email: item.email });
  }
}
