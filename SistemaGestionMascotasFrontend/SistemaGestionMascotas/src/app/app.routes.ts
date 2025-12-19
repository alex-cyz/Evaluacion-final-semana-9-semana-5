import { Routes } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { MascotasComponent } from './components/mascotas/mascotas.component';
import { ProductosComponent } from './components/productos/productos.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { ReportesComponent } from './components/reportes/reportes.component';

export const routes: Routes = [
  { path: '', redirectTo: '/clientes', pathMatch: 'full' },
  { path: 'clientes', component: ClientesComponent },
  { path: 'mascotas', component: MascotasComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'ventas', component: VentasComponent },
  { path: 'reportes', component: ReportesComponent }
];
