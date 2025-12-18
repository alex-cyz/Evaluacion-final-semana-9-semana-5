namespace SistemaGestionMascotas.Api.Models
{
    public class Venta
    {
        public int IdVenta { get; set; }
        public int IdCliente { get; set; }
        public DateTime FechaVenta { get; set; }
        public decimal Total { get; set; }
        public string Estado { get; set; } = "Completada"; // Completada, Pendiente, Cancelada
        
        // Relaciones
        public Cliente? Cliente { get; set; }
        public ICollection<DetalleVenta> Detalles { get; set; } = new List<DetalleVenta>();
    }
}
