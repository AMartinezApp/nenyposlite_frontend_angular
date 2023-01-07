import { createAction, props } from '@ngrx/store';
import {  ProductI } from 'src/app/inventory/models/product';

export const loadProducts = createAction('[Inventory Module] Load Products');

export const loadedProducts = createAction(
  '[Inventory Module] Loaded Products',
  props<{ product: ProductI[] }>()
);


