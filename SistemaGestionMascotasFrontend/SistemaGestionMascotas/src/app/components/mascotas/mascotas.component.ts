import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MascotaService } from '../../services/mascota.service';
import { Mascota } from '../../models/mascota.model';

@Component({
  selector: 'app-mascotas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent implements OnInit {
  mascotas: Mascota[] = [];
  nuevaMascota: Mascota = {
    nombre: '',
    especie: '',
    raza: '',
    peso: 0,
    descripcion: ''
  };
  mostrarFormulario = false;
  editando: boolean = false;

  constructor(private mascotaService: MascotaService) { }

  ngOnInit(): void {
    this.cargarMascotas();
  }

  cargarMascotas(): void {
    this.mascotaService.getMascotas().subscribe({
      next: (data) => this.mascotas = data,
      error: (error) => console.error('Error al cargar mascotas', error)
    });
  }

  guardarMascota(): void {
    if (this.editando && this.nuevaMascota.idMascota) {
      this.mascotaService.updateMascota(this.nuevaMascota.idMascota, this.nuevaMascota).subscribe({
        next: () => { this.cargarMascotas(); this.resetFormulario(); },
        error: (error) => console.error('Error al actualizar mascota', error)
      });
    } else {
      this.mascotaService.createMascota(this.nuevaMascota).subscribe({
        next: () => { this.cargarMascotas(); this.resetFormulario(); },
        error: (error) => console.error('Error al crear mascota', error)
      });
    }
  }

  editarMascota(mascota: Mascota): void {
    this.nuevaMascota = { ...mascota };
    this.editando = true;
    this.mostrarFormulario = true;
  }

  eliminarMascota(id: number | undefined): void {
    if (id && confirm('¿Estás seguro de eliminar esta mascota?')) {
      this.mascotaService.deleteMascota(id).subscribe({
        next: () => this.cargarMascotas(),
        error: (error) => console.error('Error al eliminar mascota', error)
      });
    }
  }

  resetFormulario(): void {
    this.nuevaMascota = { nombre: '', especie: '', raza: '', peso: 0, descripcion: '' };
    this.mostrarFormulario = false;
    this.editando = false;
  }

  abrirFormulario(): void {
    this.resetFormulario();
    this.mostrarFormulario = true;
  }
}
