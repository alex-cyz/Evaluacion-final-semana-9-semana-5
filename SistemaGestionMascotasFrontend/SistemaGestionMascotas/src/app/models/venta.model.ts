import { Cliente } from './cliente.model';
import { Producto } from './producto.model';

export interface DetalleVenta {
  idDetalleVenta?: number;
  idVenta: number;
  idProducto: number;
  cantidad: number;
  precioUnitario: number;
  subtotal: number;
  producto?: Producto;
}

export interface Venta {
  idVenta?: number;
  idCliente: number;
  fechaVenta?: Date;
  total: number;
  estado: string;
  cliente?: Cliente;
  detalles?: DetalleVenta[];
}
