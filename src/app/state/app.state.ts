import { ActionReducerMap } from "@ngrx/store";
import { ProductState } from "../inventory/models/product";
import { productsRecuder } from "./reducers/products.reducers";

export interface AppState{
    products: ProductState;
}

export const ROOT_REDUCERS:ActionReducerMap<AppState>={
    products: productsRecuder
}