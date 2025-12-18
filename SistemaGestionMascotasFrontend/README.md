# Frontend - Sistema de Administración de Tienda de Mascotas

## Descripción
Aplicación web desarrollada con Angular que proporciona interfaz de usuario para gestionar una tienda de mascotas.

## Tecnologías Utilizadas
- Angular 19
- TypeScript
- CSS
- HttpClient para comunicación con API

## Requisitos Previos
- Node.js (v18 o superior)
- npm (v9 o superior)
- Angular CLI 19

## Instalación

### 1. Navegar al directorio del proyecto
```bash
cd SistemaGestionMascotas
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Ejecutar la aplicación
```bash
ng serve
```

La aplicación estará disponible en: `http://localhost:4200`

## Estructura del Proyecto
```
SistemaGestionMascotas/
├── src/
│   ├── app/
│   │   ├── components/      # Componentes de la aplicación
│   │   ├── models/          # Interfaces de TypeScript
│   │   ├── services/        # Servicios para comunicación con API
│   │   ├── app.ts           # Componente raíz
│   │   └── app.config.ts    # Configuración de la aplicación
│   ├── main.ts              # Punto de entrada de la aplicación
│   └── styles.css           # Estilos globales
├── angular.json             # Configuración de Angular
└── package.json             # Dependencias del proyecto
```

## Funcionalidades

### Gestión de Clientes
- Listar clientes
- Crear nuevo cliente
- Editar cliente
- Eliminar cliente

### Gestión de Mascotas
- Listar mascotas
- Crear nueva mascota
- Editar mascota
- Eliminar mascota

### Gestión de Productos
- Listar productos
- Crear nuevo producto
- Editar producto
- Eliminar producto

### Gestión de Ventas
- Listar ventas
- Crear nueva venta
- Ver detalles de venta
- Eliminar venta

### Reportes
- Reporte de productos vendidos por categoría
- Estadísticas de ventas

## Servicios

### ClienteService
Proporciona métodos para interactuar con la API de clientes.

### MascotaService
Proporciona métodos para interactuar con la API de mascotas.

### ProductoService
Proporciona métodos para interactuar con la API de productos.

### VentaService
Proporciona métodos para interactuar con la API de ventas e incluye el endpoint para reportes.

## Configuración de la API
La URL base de la API está configurada en los servicios como:
```
https://localhost:7121/api
```

Si necesitas cambiar la URL, modifica las propiedades `apiUrl` en los archivos de servicio.

## Desarrollo

### Generar un nuevo componente
```bash
ng generate component components/nombre-componente
```

### Generar un nuevo servicio
```bash
ng generate service services/nombre-servicio
```

### Compilar para producción
```bash
ng build --configuration production
```

## Notas Importantes
- La aplicación require que el backend (ASP.NET Core API) esté ejecutándose en `https://localhost:7121`
- Se debe habilitar CORS en la API para que funcione la comunicación
- Se requiere HTTPS para la comunicación local

## Desarrollo Futuro
- Implementar validaciones en formularios
- Agregar paginación en listados
- Implementar búsqueda y filtros
- Agregar autenticación
- Mejorar diseño de interfaz de usuario
- Agregar gráficos para reportes
- Implementar notificaciones
