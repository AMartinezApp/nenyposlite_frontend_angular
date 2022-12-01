export interface NcftypeI {
  id: string;
  name: string;
  typedoc: string;
  prefix: string;
  inicial_num: number;
  final_num: number;
  current_num: number;
  expiration: string;
  status?: string;
  tax: number;
}

 export interface NcfDataI {
  id: number,
  name: string;
  type: string;
  prefix: string;
  inicial_num: number;
  help: string;
}
 

export const arrNcf: NcfDataI[] = [
  // Normalization data for ncf's in Dominican Republic of the DGII office
    {id: 1, name: 'Factura de Crédito Fiscal', type: '01', prefix:'B0',inicial_num:100000001,
  help:'Registran las transacciones comerciales de compra y venta de bienes y/o los que prestan algún servicio. Permiten al comprador o usuario que lo solicite sustentar gastos y costos del ISR o créditos del ITBIS.'},
    {id: 2, name: 'Factura de Consumo', type: '02', prefix:'B0',inicial_num:200000001,
  help:'Acreditan la transferencia de bienes, la entrega en uso o la prestación de servicios a consumidores finales. No poseen efectos tributarios, es decir, que no podrán ser utilizados para créditos en el ITBIS y/o reducir gastos y costos del ISR.'},
    {id: 3, name: 'Notas de Débito', type: '03', prefix:'B0',inicial_num:300000001,
  help:'Documentos que emiten los vendedores de bienes y/o los que prestan servicios para recuperar costos y gastos, como: intereses por mora, fletes u otros, después de emitido el comprobante fiscal. Sólo podrán ser emitidas al mismo adquiriente o usuario para modificar comprobantes emitidos con anterioridad.'},
    {id: 4, name: 'Notas de Crédito', type: '04', prefix:'B0',inicial_num:400000001,
  help:'Documentos que emiten los vendedores de bienes y/ o prestadores de servicios por modificaciones posteriores en las condiciones de venta originalmente pactadas, es decir, para anular operaciones, efectuar devoluciones, conceder descuentos y bonificaciones, corregir errores o casos similares.'},
    {id: 5, name: 'Comprobante de Compras', type: '11', prefix:'B1',inicial_num:100000001,
  help:'Documentos emitido por las personas físicas o jurídicas cuando adquieran bienes o servicios de personas no registradas como contribuyentes o que sean autorizados mediante norma general.'},
    {id: 6, name: 'Registro Único de Ingresos', type: '12', prefix:'B1',inicial_num:200000001,
  help:'Documento utilizado para registrar un resumen de las transacciones diarias realizadas por las personas físicas o jurídicas a consumidores finales, concentradas fundamentalmente en productos o servicios exentos del ITBIS.'},
    {id: 7, name: 'Gastos Menores', type: '13', prefix:'B1',inicial_num:300000001,
  help:'Son aquellos comprobantes emitidos por las personas físicas o jurídicas para sustentar pagos realizados por su personal, sean estos efectuados en territorio dominicano o en el extranjero y en ocasión a las actividades relacionadas al trabajo, tales como: consumibles, pasajes, transporte público, tarifas de estacionamiento y Peajes.'},
    {id: 8, name: 'Regímenes Especiales', type: '14', prefix:'B1',inicial_num:400000001,
  help:'Son utilizados para facturar las ventas de bienes o prestación de servicios exentos del ITBIS o ISC a personas físicas o jurídicas acogidas a regímenes especiales de tributación, mediante leyes especiales, contratos o convenios debidamente ratificados por el Congreso Nacional.'},
    {id: 9, name: 'Gubernamental', type: '15', prefix:'B1',inicial_num:500000001,
  help:'Son utilizados para facturar la venta de bienes y la prestación de servicios al Gobierno Central, Instituciones Descentralizadas y Autónomas, Instituciones de Seguridad Social y cualquier entidad gubernamental que no realice una actividad comercial.'},
    {id: 10, name: 'Exportaciones', type: '16', prefix:'B1',inicial_num:600000001,
  help:'Son utilizados por los exportadores nacionales; zonas francas comerciales e industriales para reportar las ventas de bienes fuera del territorio nacional.'},
    {id: 11, name: 'Pagos al Exterior', type: '17', prefix:'B1',inicial_num:700000001,
  help:'Son emitidos por concepto de pago de rentas gravadas de fuente dominicana a personas físicas o jurídicas no residentes fiscales. Al emitir este documento se debe realizar la retención total del Impuesto Sobre la Renta, de conformidad a los artículos 297 y 305 del Código Tributario.'}
];
