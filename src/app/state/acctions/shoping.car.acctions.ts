import { createAction, props } from "@ngrx/store";
import { ItemShopingCar } from "src/app/invoice/models/shoping.car";

export const loadedItemShopingCar = createAction(
    '[Shoping Car] Loaded Item Shoping.',
    props<{ item: ItemShopingCar[] }>()
)