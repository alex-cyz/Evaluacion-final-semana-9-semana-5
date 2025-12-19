import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentaService, ReporteVentas } from '../../services/venta.service';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  reportes: ReporteVentas[] = [];
  cargando = false;

  constructor(private ventaService: VentaService) { }

  ngOnInit(): void {
    this.cargarReportePorCategoria();
  }

  cargarReportePorCategoria(): void {
    this.cargando = true;
    this.ventaService.getReportePorCategoria().subscribe({
      next: (data) => {
        this.reportes = data;
        this.cargando = false;
      },
      error: (error) => {
        console.error('Error al cargar reporte', error);
        this.cargando = false;
      }
    });
  }

  calcularTotalGeneral(): number {
    return this.reportes.reduce((total, r) => total + r.totalVentas, 0);
  }

  calcularProductosTotalVendidos(): number {
    return this.reportes.reduce((total, r) => total + r.totalProductosVendidos, 0);
  }
}
