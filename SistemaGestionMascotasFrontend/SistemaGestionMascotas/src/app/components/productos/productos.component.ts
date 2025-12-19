import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];
  nuevoProducto: Producto = {
    nombre: '',
    categoria: '',
    descripcion: '',
    precio: 0,
    stock: 0
  };
  mostrarFormulario = false;
  editando: boolean = false;

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.getProductos().subscribe({
      next: (data) => this.productos = data,
      error: (error) => console.error('Error al cargar productos', error)
    });
  }

  guardarProducto(): void {
    if (this.editando && this.nuevoProducto.idProducto) {
      this.productoService.updateProducto(this.nuevoProducto.idProducto, this.nuevoProducto).subscribe({
        next: () => { this.cargarProductos(); this.resetFormulario(); },
        error: (error) => console.error('Error al actualizar producto', error)
      });
    } else {
      this.productoService.createProducto(this.nuevoProducto).subscribe({
        next: () => { this.cargarProductos(); this.resetFormulario(); },
        error: (error) => console.error('Error al crear producto', error)
      });
    }
  }

  editarProducto(producto: Producto): void {
    this.nuevoProducto = { ...producto };
    this.editando = true;
    this.mostrarFormulario = true;
  }

  eliminarProducto(id: number | undefined): void {
    if (id && confirm('¿Estás seguro de eliminar este producto?')) {
      this.productoService.deleteProducto(id).subscribe({
        next: () => this.cargarProductos(),
        error: (error) => console.error('Error al eliminar producto', error)
      });
    }
  }

  resetFormulario(): void {
    this.nuevoProducto = { nombre: '', categoria: '', descripcion: '', precio: 0, stock: 0 };
    this.mostrarFormulario = false;
    this.editando = false;
  }

  abrirFormulario(): void {
    this.resetFormulario();
    this.mostrarFormulario = true;
  }
}
