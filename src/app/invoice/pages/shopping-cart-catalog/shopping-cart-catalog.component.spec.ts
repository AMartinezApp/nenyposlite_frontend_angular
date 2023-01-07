import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartCatalogComponent } from './shopping-cart-catalog.component';

describe('ShoppingCartCatalogComponent', () => {
  let component: ShoppingCartCatalogComponent;
  let fixture: ComponentFixture<ShoppingCartCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartCatalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCartCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
