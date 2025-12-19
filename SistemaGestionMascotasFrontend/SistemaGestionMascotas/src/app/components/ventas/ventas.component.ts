import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VentaService } from '../../services/venta.service';
import { ClienteService } from '../../services/cliente.service';
import { ProductoService } from '../../services/producto.service';
import { Venta } from '../../models/venta.model';
import { Cliente } from '../../models/cliente.model';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  ventas: Venta[] = [];
  clientes: Cliente[] = [];
  productos: Producto[] = [];
  
  nuevaVenta: Venta = {
    idCliente: 0,
    total: 0,
    estado: 'Completada',
    detalles: []
  };
  
  mostrarFormulario = false;
  editando: boolean = false;

  constructor(
    private ventaService: VentaService,
    private clienteService: ClienteService,
    private productoService: ProductoService
  ) { }

  ngOnInit(): void {
    this.cargarVentas();
    this.cargarClientes();
    this.cargarProductos();
  }

  cargarVentas(): void {
    this.ventaService.getVentas().subscribe({
      next: (data) => this.ventas = data,
      error: (error) => console.error('Error al cargar ventas', error)
    });
  }

  cargarClientes(): void {
    this.clienteService.getClientes().subscribe({
      next: (data) => this.clientes = data,
      error: (error) => console.error('Error al cargar clientes', error)
    });
  }

  cargarProductos(): void {
    this.productoService.getProductos().subscribe({
      next: (data) => this.productos = data,
      error: (error) => console.error('Error al cargar productos', error)
    });
  }

  guardarVenta(): void {
    if (this.nuevaVenta.idCliente === 0) {
      alert('Selecciona un cliente');
      return;
    }

    this.ventaService.createVenta(this.nuevaVenta).subscribe({
      next: () => { this.cargarVentas(); this.resetFormulario(); },
      error: (error) => console.error('Error al crear venta', error)
    });
  }

  eliminarVenta(id: number | undefined): void {
    if (id && confirm('¿Estás seguro de eliminar esta venta?')) {
      this.ventaService.deleteVenta(id).subscribe({
        next: () => this.cargarVentas(),
        error: (error) => console.error('Error al eliminar venta', error)
      });
    }
  }

  resetFormulario(): void {
    this.nuevaVenta = { idCliente: 0, total: 0, estado: 'Completada', detalles: [] };
    this.mostrarFormulario = false;
    this.editando = false;
  }

  abrirFormulario(): void {
    this.resetFormulario();
    this.mostrarFormulario = true;
  }
}
