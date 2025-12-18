namespace SistemaGestionMascotas.Api.Models
{
    public class Mascota
    {
        public int IdMascota { get; set; }
        public string Nombre { get; set; } = string.Empty;
        public string Especie { get; set; } = string.Empty; // Perro, Gato, Ave, etc.
        public string Raza { get; set; } = string.Empty;
        public int? Edad { get; set; }
        public decimal Peso { get; set; }
        public string Descripcion { get; set; } = string.Empty;
        public DateTime FechaRegistro { get; set; }
    }
}
