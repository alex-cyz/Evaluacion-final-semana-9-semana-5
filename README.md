# Sistema de Administración de Tienda de Mascotas

Sistema completo de administración para tienda de mascotas con funcionalidades de gestión de clientes, mascotas, productos y ventas, incluyendo reportes.

## Tecnologías

- **Frontend:** Angular
- **Backend:** ASP.NET Core Web API
- **Base de Datos:** SQL Server
- **Versionado:** Git

## Estructura del Proyecto

```
├── SistemaGestionMascotasAppBackend/    # Backend - ASP.NET Core Web API
├── SistemaGestionMascotasFrontend/      # Frontend - Angular
└── README.md
```

## Tablas de Base de Datos

1. **Clientes** - Información de clientes
2. **Mascotas** - Registro de mascotas
3. **Productos** - Catálogo de productos
4. **Ventas** - Registro de ventas

## Funcionalidades

- CRUD completo para cada tabla
- Gestión de ventas
- Reportes de productos vendidos por categoría
- Autenticación y autorización
- Interfaz de usuario intuitiva

## Instrucciones de Setup

### Backend

```bash
cd SistemaGestionMascotasAppBackend
dotnet restore
dotnet run
```

### Frontend

```bash
cd SistemaGestionMascotasFrontend
npm install
ng serve
```

## Requisitos

- .NET 6 o superior
- Node.js (v18 o superior)
- Angular CLI
- SQL Server
