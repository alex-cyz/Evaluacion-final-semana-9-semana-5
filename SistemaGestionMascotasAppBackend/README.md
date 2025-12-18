# Backend - Sistema de Administración de Tienda de Mascotas

## Descripción
API Web desarrollada con ASP.NET Core 9.0 que proporciona servicios para gestionar una tienda de mascotas.

## Tecnologías Utilizadas
- ASP.NET Core 9.0
- Entity Framework Core 9.0
- SQL Server (LocalDB)
- CORS

## Requisitos Previos
- .NET 9 SDK
- SQL Server LocalDB (instalado con Visual Studio)
- Visual Studio Code o Visual Studio

## Configuración

### 1. Restaurar paquetes NuGet
```bash
dotnet restore
```

### 2. Configurar la base de datos
La cadena de conexión se encuentra en `appsettings.json`:
```json
"ConnectionStrings": {
    "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=SistemaGestionMascotasDb;Trusted_Connection=true;"
}
```

### 3. Ejecutar migraciones
```bash
dotnet ef migrations add InitialCreate
dotnet ef database update
```

### 4. Ejecutar la aplicación
```bash
dotnet run
```

La API estará disponible en: `https://localhost:7121`

## Endpoints de la API

### Clientes
- `GET /api/clientes` - Obtener todos los clientes
- `GET /api/clientes/{id}` - Obtener un cliente por ID
- `POST /api/clientes` - Crear un nuevo cliente
- `PUT /api/clientes/{id}` - Actualizar un cliente
- `DELETE /api/clientes/{id}` - Eliminar un cliente

### Mascotas
- `GET /api/mascotas` - Obtener todas las mascotas
- `GET /api/mascotas/{id}` - Obtener una mascota por ID
- `POST /api/mascotas` - Crear una nueva mascota
- `PUT /api/mascotas/{id}` - Actualizar una mascota
- `DELETE /api/mascotas/{id}` - Eliminar una mascota

### Productos
- `GET /api/productos` - Obtener todos los productos
- `GET /api/productos/{id}` - Obtener un producto por ID
- `POST /api/productos` - Crear un nuevo producto
- `PUT /api/productos/{id}` - Actualizar un producto
- `DELETE /api/productos/{id}` - Eliminar un producto

### Ventas
- `GET /api/ventas` - Obtener todas las ventas
- `GET /api/ventas/{id}` - Obtener una venta por ID
- `GET /api/ventas/reportes/por-categoria` - Obtener reporte de productos vendidos por categoría
- `POST /api/ventas` - Crear una nueva venta
- `PUT /api/ventas/{id}` - Actualizar una venta
- `DELETE /api/ventas/{id}` - Eliminar una venta

## Estructura del Proyecto
```
SistemaGestionMascotas.Api/
├── Controllers/        # Controladores de API
├── Models/            # Modelos de datos
├── Data/              # Contexto de EF Core
├── Program.cs         # Configuración de la aplicación
└── appsettings.json   # Configuración de la aplicación
```

## Modelos de Datos

### Cliente
```csharp
{
    "idCliente": int,
    "nombre": string,
    "apellido": string,
    "email": string,
    "telefono": string,
    "direccion": string,
    "fechaRegistro": datetime
}
```

### Mascota
```csharp
{
    "idMascota": int,
    "nombre": string,
    "especie": string,
    "raza": string,
    "edad": int,
    "peso": decimal,
    "descripcion": string,
    "fechaRegistro": datetime
}
```

### Producto
```csharp
{
    "idProducto": int,
    "nombre": string,
    "categoria": string,
    "descripcion": string,
    "precio": decimal,
    "stock": int,
    "fechaRegistro": datetime
}
```

### Venta
```csharp
{
    "idVenta": int,
    "idCliente": int,
    "fechaVenta": datetime,
    "total": decimal,
    "estado": string,
    "detalles": DetalleVenta[]
}
```

## CORS
La API está configurada para permitir solicitudes CORS desde cualquier origen con el propósito de facilitar la integración con el frontend Angular.

## Desarrollo Futuro
- Implementar autenticación JWT
- Agregar validaciones más robustas
- Implementar paginación en endpoints GET
- Agregar filtros y búsqueda avanzada
- Implementar logging centralizado
