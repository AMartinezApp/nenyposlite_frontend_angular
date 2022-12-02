export interface ListInvoiceI {
  id: number;
  condition: string;
  createdAt: string;
  expiration: string;
  idcustomer: number;
  idncftype: number;
  ncf: string;
  footer: string; 
  total_price_unit: number;
  total_cost: number;
  total_quantity: number;
  total_price: number;
  total_discount: number;
  total_tax: number;
  customer: {
    name: string;
    email: string;
    phone: string;
  };
}
