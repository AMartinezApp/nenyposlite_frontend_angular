import { createSelector } from '@ngrx/store';
import { ProductI } from 'src/app/inventory/models/product';
import { AppState } from '../app.state';

export const selectProductsFeatures = (state: AppState) => state.products;

export const selectProducts = createSelector(
  selectProductsFeatures,
  (state: ProductI) => state
);


