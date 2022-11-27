import { environment } from "src/environments/environment";

export class PathRest{
    static readonly POST_LOGIN = environment.API_URL +'/auth/login';
    static readonly CATEGORIES = environment.API_URL +'/productscategorys';
    static readonly STORES = environment.API_URL +'/productsstores';
    static readonly TAXES = environment.API_URL +'/productstaxes';
    static readonly PRODUCTS = environment.API_URL +'/products';
    static readonly SETTING = environment.API_URL +'/settings';
}