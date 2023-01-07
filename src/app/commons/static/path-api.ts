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
    static readonly SUPPLIERS = environment.API_URL +'/suppliers';
    
    // invoices Module
    static readonly INVOICES = environment.API_URL +'/invoices';
    static readonly INVOICESDETAILS = environment.API_URL +'/invoicesdetails';
    static readonly CUSTOMERS = environment.API_URL +'/customers';
    static readonly NCFTYPES = environment.API_URL +'/ncftypes';

    
}