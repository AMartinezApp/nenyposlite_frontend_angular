import { createReducer, on } from '@ngrx/store';
import { ProductI, ProductState } from 'src/app/inventory/models/product';
import { loadedProducts, loadProducts } from '../acctions/products.acctions';

export const initialState: ProductState = { loading: false, products: [] };

export const productsRecuder = createReducer(
  initialState,
  on(loadedProducts, (state, { product }) => ({
    ...state,
    loading: false,
    product,
  })),
  on(loadProducts, (state) => {
    //TODO:!
    return { ...state, loading: true };
  })
//   ,
//   on(loadedProducts, (state, { product }) => {
//     return { ...state, loading: false, product };
//   })
);
