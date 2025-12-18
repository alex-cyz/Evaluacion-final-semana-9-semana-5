export interface Producto {
  idProducto?: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  precio: number;
  stock: number;
  fechaRegistro?: Date;
}
