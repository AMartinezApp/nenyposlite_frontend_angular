import { environment } from "src/environments/environment";

export class PathRest{
    static readonly USER_ROL = environment.API_URL +'/usersroles';
    static readonly POST_LOGIN = environment.API_URL +'/auth/login';
    static readonly GET_LOGIN = environment.API_URL +'/auth/users';
    static readonly REGISTER_USER = environment.API_URL +'/auth/register';
    static readonly CATEGORIES = environment.API_URL +'/productscategorys';
    static readonly STORES = environment.API_URL +'/productsstores';
    static readonly TAXES = environment.API_URL +'/productstaxes';
    static readonly PRODUCTS = environment.API_URL +'/products';
    static readonly SETTING = environment.API_URL +'/settings';
}