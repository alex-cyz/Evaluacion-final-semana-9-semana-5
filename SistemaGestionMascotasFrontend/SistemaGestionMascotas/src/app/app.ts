import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavegacionComponent } from './components/navegacion/navegacion.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavegacionComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { }
