# Instrucciones para Ejecutar el Sistema de Administración de Tienda de Mascotas

## Requisitos del Sistema
- .NET 9 SDK
- Node.js (v18 o superior)
- Angular CLI 19
- SQL Server LocalDB
- Visual Studio Code o Visual Studio

## Pasos para Ejecutar

### 1. Clonar o descargar el repositorio
```bash
cd "Evaluacion final semana 9"
```

### 2. Configurar y Ejecutar el Backend

#### 2.1 Restaurar dependencias
```bash
cd SistemaGestionMascotasAppBackend/SistemaGestionMascotas.Api
dotnet restore
```

#### 2.2 Crear y aplicar migraciones de base de datos
```bash
dotnet ef migrations add InitialCreate
dotnet ef database update
```

#### 2.3 Ejecutar la aplicación
```bash
dotnet run
```

El backend estará disponible en: `https://localhost:7121`

### 3. Ejecutar el Frontend

#### 3.1 Navegar al directorio del frontend
```bash
cd ..\..\SistemaGestionMascotasFrontend\SistemaGestionMascotas
```

#### 3.2 Instalar dependencias
```bash
npm install
```

#### 3.3 Ejecutar la aplicación
```bash
ng serve
```

El frontend estará disponible en: `http://localhost:4200`

## Verificar la Instalación

### Backend
- Abre el navegador y ve a: `https://localhost:7121`
- Deberías ver documentación de OpenAPI

### Frontend
- Abre el navegador y ve a: `http://localhost:4200`
- Deberías ver la aplicación Angular ejecutándose

### Comunicación entre Frontend y Backend
- Si todo está configurado correctamente, la aplicación Angular debería poder comunicarse con la API
- Verifica la consola del navegador para cualquier error de CORS

## Solución de Problemas

### Error de Conexión a Base de Datos
- Asegúrate de que SQL Server LocalDB esté instalado
- Verifica que el nombre de la instancia en `appsettings.json` sea correcto
- Intenta crear manualmente la base de datos

### Error de CORS
- Verifica que el backend tenga CORS habilitado
- Asegúrate de que la URL de la API en los servicios Angular sea correcta

### Puerto ya en uso
- Cambia los puertos en:
  - Backend: `launchSettings.json`
  - Frontend: `ng serve --port 4300` (ejemplo)

## Estructura de Carpetas

```
Evaluacion final semana 9/
├── SistemaGestionMascotasAppBackend/
│   └── SistemaGestionMascotas.Api/
│       ├── Controllers/
│       ├── Models/
│       ├── Data/
│       ├── Program.cs
│       └── appsettings.json
├── SistemaGestionMascotasFrontend/
│   └── SistemaGestionMascotas/
│       ├── src/app/
│       │   ├── components/
│       │   ├── models/
│       │   └── services/
│       └── package.json
├── README.md
└── .gitignore
```

## Endpoints Disponibles

### Clientes
- `GET /api/clientes`
- `GET /api/clientes/{id}`
- `POST /api/clientes`
- `PUT /api/clientes/{id}`
- `DELETE /api/clientes/{id}`

### Mascotas
- `GET /api/mascotas`
- `GET /api/mascotas/{id}`
- `POST /api/mascotas`
- `PUT /api/mascotas/{id}`
- `DELETE /api/mascotas/{id}`

### Productos
- `GET /api/productos`
- `GET /api/productos/{id}`
- `POST /api/productos`
- `PUT /api/productos/{id}`
- `DELETE /api/productos/{id}`

### Ventas
- `GET /api/ventas`
- `GET /api/ventas/{id}`
- `GET /api/ventas/reportes/por-categoria`
- `POST /api/ventas`
- `PUT /api/ventas/{id}`
- `DELETE /api/ventas/{id}`

## Control de Versiones

El proyecto utiliza Git para control de versiones. Comandos útiles:

```bash
# Ver estado
git status

# Ver historial de commits
git log

# Crear una nueva rama
git checkout -b nombre-rama

# Cambiar de rama
git checkout nombre-rama

# Hacer commit
git commit -m "Descripción del cambio"

# Hacer push
git push origin nombre-rama
```

## Próximos Pasos

1. Crear componentes para la interfaz de usuario
2. Implementar validaciones en formularios
3. Agregar autenticación
4. Mejorar el diseño
5. Agregar reportes visuales
6. Desplegar a producción

---

Para más información, consulta los archivos README.md en las carpetas del backend y frontend.
