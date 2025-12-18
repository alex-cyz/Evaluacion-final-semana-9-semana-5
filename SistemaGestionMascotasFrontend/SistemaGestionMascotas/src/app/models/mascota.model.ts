export interface Mascota {
  idMascota?: number;
  nombre: string;
  especie: string;
  raza: string;
  edad?: number;
  peso: number;
  descripcion: string;
  fechaRegistro?: Date;
}
