using Microsoft.EntityFrameworkCore;
using SistemaGestionMascotas.Api.Models;

namespace SistemaGestionMascotas.Api.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Mascota> Mascotas { get; set; }
        public DbSet<Producto> Productos { get; set; }
        public DbSet<Venta> Ventas { get; set; }
        public DbSet<DetalleVenta> DetallesVenta { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configuración de Clientes
            modelBuilder.Entity<Cliente>()
                .HasKey(c => c.IdCliente);
            
            modelBuilder.Entity<Cliente>()
                .Property(c => c.Email)
                .IsRequired();

            // Configuración de Mascotas
            modelBuilder.Entity<Mascota>()
                .HasKey(m => m.IdMascota);

            // Configuración de Productos
            modelBuilder.Entity<Producto>()
                .HasKey(p => p.IdProducto);
            
            modelBuilder.Entity<Producto>()
                .Property(p => p.Precio)
                .HasPrecision(10, 2);

            // Configuración de Ventas
            modelBuilder.Entity<Venta>()
                .HasKey(v => v.IdVenta);
            
            modelBuilder.Entity<Venta>()
                .Property(v => v.Total)
                .HasPrecision(10, 2);

            modelBuilder.Entity<Venta>()
                .HasOne(v => v.Cliente)
                .WithMany(c => c.Ventas)
                .HasForeignKey(v => v.IdCliente)
                .OnDelete(DeleteBehavior.Restrict);

            // Configuración de DetalleVenta
            modelBuilder.Entity<DetalleVenta>()
                .HasKey(dv => dv.IdDetalleVenta);
            
            modelBuilder.Entity<DetalleVenta>()
                .Property(dv => dv.PrecioUnitario)
                .HasPrecision(10, 2);
            
            modelBuilder.Entity<DetalleVenta>()
                .Property(dv => dv.Subtotal)
                .HasPrecision(10, 2);

            modelBuilder.Entity<DetalleVenta>()
                .HasOne(dv => dv.Venta)
                .WithMany(v => v.Detalles)
                .HasForeignKey(dv => dv.IdVenta)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<DetalleVenta>()
                .HasOne(dv => dv.Producto)
                .WithMany(p => p.DetallesVenta)
                .HasForeignKey(dv => dv.IdProducto)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
