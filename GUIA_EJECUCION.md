# Sistema de Administración de Tienda de Mascotas - GUÍA DE EJECUCIÓN

## 📋 Resumen del Proyecto

Sistema completo de administración para una tienda de mascotas con:
- **Backend:** ASP.NET Core 9 Web API
- **Frontend:** Angular 19
- **Base de Datos:** SQL Server (LocalDB)
- **CRUD Completo** para: Clientes, Mascotas, Productos, Ventas
- **Reportes:** Análisis de productos vendidos por categoría

---

## 🚀 INSTRUCCIONES DE EJECUCIÓN

### PASO 1: Preparar el Backend (ASP.NET Core)

#### 1.1 Abrir Terminal PowerShell y navegar al backend:
```bash
cd "c:\xampp\htdocs\Evaluacion final semana 9\SistemaGestionMascotasAppBackend\SistemaGestionMascotas.Api"
```

#### 1.2 Aplicar migraciones a la base de datos:
```bash
dotnet ef database update
```

#### 1.3 Ejecutar la API:
```bash
dotnet run
```

**Resultado esperado:**
```
info: Microsoft.Hosting.Lifetime[14]
      Now listening on: https://localhost:7121
      Now listening on: http://localhost:5082
```

✅ **Backend estará disponible en:** `https://localhost:7121`

---

### PASO 2: Preparar el Frontend (Angular)

#### 2.1 Abrir OTRA terminal PowerShell y navegar al frontend:
```bash
cd "c:\xampp\htdocs\Evaluacion final semana 9\SistemaGestionMascotasFrontend\SistemaGestionMascotas"
```

#### 2.2 Instalar dependencias (si no está hecho):
```bash
npm install
```

#### 2.3 Ejecutar la aplicación Angular:
```bash
ng serve
```

**Resultado esperado:**
```
✔ Compiled successfully.
✔ Application bundle generated successfully.
Local: http://localhost:4200/
```

✅ **Frontend estará disponible en:** `http://localhost:4200`

---

## 🌐 Acceder a la Aplicación

Abre tu navegador y ve a: **http://localhost:4200**

Verás la interfaz con:
- 🧑 **Clientes** - Gestionar información de clientes
- 🐾 **Mascotas** - Registrar y administrar mascotas
- 📦 **Productos** - Catálogo de productos (Alimentos, Juguetes, Accesorios, Medicinas)
- 💳 **Ventas** - Registrar ventas con detalle de productos
- 📊 **Reportes** - Análisis de productos vendidos por categoría

---

## 📊 FUNCIONALIDADES

### Gestión de Clientes
- ✅ Crear nuevo cliente
- ✅ Ver lista de clientes
- ✅ Editar información
- ✅ Eliminar cliente

### Gestión de Mascotas
- ✅ Registrar mascota (Perro, Gato, Ave, etc.)
- ✅ Guardar datos: nombre, especie, raza, edad, peso
- ✅ Editar y eliminar registros

### Gestión de Productos
- ✅ Crear productos con categoría
- ✅ Categorías: Alimentos, Juguetes, Accesorios, Medicinas
- ✅ Controlar precio y stock
- ✅ Actualizar información

### Gestión de Ventas
- ✅ Registrar venta asignando cliente
- ✅ Calcular total
- ✅ Estados: Completada, Pendiente, Cancelada
- ✅ Ver historial de ventas

### Reportes
- ✅ **Reporte por Categoría** mostrando:
  - Productos vendidos por categoría
  - Total de ventas por categoría
  - Número de transacciones
  - Totales generales

---

## 🗄️ ESTRUCTURA DE BASE DE DATOS

### Tablas:
1. **Clientes** - Información personal, email, teléfono
2. **Mascotas** - Datos de mascotas (especie, raza, peso)
3. **Productos** - Catálogo con categoría, precio, stock
4. **Ventas** - Encabezado de venta con cliente
5. **DetallesVenta** - Relación muchos-a-muchos entre Ventas y Productos

---

## 🔗 ENDPOINTS API

### Clientes
- `GET /api/clientes` - Obtener todos
- `GET /api/clientes/{id}` - Obtener por ID
- `POST /api/clientes` - Crear nuevo
- `PUT /api/clientes/{id}` - Actualizar
- `DELETE /api/clientes/{id}` - Eliminar

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
- `GET /api/ventas/reportes/por-categoria` ⭐ Reporte
- `POST /api/ventas`
- `PUT /api/ventas/{id}`
- `DELETE /api/ventas/{id}`

---

## ⚠️ REQUISITOS PREVIOS

- ✅ .NET 9 SDK instalado
- ✅ Node.js v18+ instalado
- ✅ SQL Server LocalDB (incluido en Visual Studio)
- ✅ Angular CLI 19 instalado globalmente: `npm install -g @angular/cli`

---

## 🐛 SOLUCIÓN DE PROBLEMAS

### Error: "Cannot GET /api/clientes"
- Verifica que el backend esté ejecutándose en `https://localhost:7121`
- Comprueba que la migración de BD se ejecutó correctamente

### Error: "Connection refused"
- Asegúrate de que ambos terminales tienen los comandos ejecutándose
- No cierres las terminales mientras usas la aplicación

### Error de CORS
- El backend ya tiene CORS habilitado para cualquier origen
- Si tienes problemas, verifica en `Program.cs`

### BD no existe
Ejecuta manualmente:
```bash
cd SistemaGestionMascotasAppBackend\SistemaGestionMascotas.Api
dotnet ef database update
```

---

## 📁 ESTRUCTURA DE CARPETAS

```
Evaluacion final semana 9/
├── SistemaGestionMascotasAppBackend/
│   └── SistemaGestionMascotas.Api/
│       ├── Controllers/       (Endpoints API)
│       ├── Models/            (Entidades)
│       ├── Data/              (DbContext)
│       ├── Migrations/        (BD)
│       └── Program.cs         (Configuración)
│
├── SistemaGestionMascotasFrontend/
│   └── SistemaGestionMascotas/
│       ├── src/app/
│       │   ├── components/    (Clientes, Mascotas, etc.)
│       │   ├── services/      (HTTP calls)
│       │   └── models/        (Interfaces)
│       └── angular.json
│
└── .git/                       (Control de versiones)
```

---

## 📝 NOTAS IMPORTANTES

1. **HTTPS requerido**: El backend usa HTTPS en localhost:7121
2. **CORS habilitado**: El frontend puede hacer solicitudes sin restricciones
3. **Base de datos local**: Se crea automáticamente en primer run
4. **Datos de prueba**: Crea registros a través de la UI

---

## 🎯 PRÓXIMOS PASOS (Sugerencias)

- Agregar validaciones más robustas en formularios
- Implementar autenticación JWT
- Agregar paginación en listados
- Implementar búsqueda y filtros avanzados
- Agregar gráficos en reportes
- Exportar reportes a Excel/PDF

---

## ✅ VERIFICACIÓN

Después de ejecutar ambos comandos, verifica:

1. ✅ Backend ejecutándose: Intenta acceder a `https://localhost:7121/api/clientes`
   - Deberías ver un JSON vacío `[]`
   
2. ✅ Frontend ejecutándose: Abre `http://localhost:4200`
   - Deberías ver la interfaz con el menú de navegación

3. ✅ Crear datos de prueba: Agrega un cliente desde la UI
   - El formulario debería enviar datos sin errores

¡Listo! 🎉 La aplicación está completamente operativa.

---

**Creado:** Diciembre 18, 2025
**Tecnologías:** Angular 19 + ASP.NET Core 9 + SQL Server
**Estado:** ✅ Completo y Funcional
