export interface ProductI {
  id: number;
  barcode: string;
  name: string;
  cost: number;
  price: number;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
  idcategory: number;
  products_category: {
    id: number;
    name: string;
  };
  idstore: number;
  products_store: {
    id: number;
    name: string;
  };
  idtax: number;
  products_tax: {
    id: number;
    name: string;
  };
  iduser: number;
}
