import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  nuevoCliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    direccion: ''
  };
  mostrarFormulario = false;
  editando: boolean = false;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes(): void {
    this.clienteService.getClientes().subscribe({
      next: (data) => {
        this.clientes = data;
      },
      error: (error) => {
        console.error('Error al cargar clientes', error);
      }
    });
  }

  guardarCliente(): void {
    if (this.editando && this.nuevoCliente.idCliente) {
      this.clienteService.updateCliente(this.nuevoCliente.idCliente, this.nuevoCliente).subscribe({
        next: () => {
          this.cargarClientes();
          this.resetFormulario();
        },
        error: (error) => console.error('Error al actualizar cliente', error)
      });
    } else {
      this.clienteService.createCliente(this.nuevoCliente).subscribe({
        next: () => {
          this.cargarClientes();
          this.resetFormulario();
        },
        error: (error) => console.error('Error al crear cliente', error)
      });
    }
  }

  editarCliente(cliente: Cliente): void {
    this.nuevoCliente = { ...cliente };
    this.editando = true;
    this.mostrarFormulario = true;
  }

  eliminarCliente(id: number | undefined): void {
    if (id && confirm('¿Estás seguro de eliminar este cliente?')) {
      this.clienteService.deleteCliente(id).subscribe({
        next: () => {
          this.cargarClientes();
        },
        error: (error) => console.error('Error al eliminar cliente', error)
      });
    }
  }

  resetFormulario(): void {
    this.nuevoCliente = {
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      direccion: ''
    };
    this.mostrarFormulario = false;
    this.editando = false;
  }

  abrirFormulario(): void {
    this.resetFormulario();
    this.mostrarFormulario = true;
  }
}
