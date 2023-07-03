import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'seleccion-de-juego-page',
  templateUrl: './seleccion-de-juego-page.component.html',
  styleUrls: ['./seleccion-de-juego-page.component.css']
})
export class SeleccionDeJuegoPageComponent {

  constructor(
    private router: Router
  ) {}

  public visible: boolean = false;
  public visible2: boolean = false;

  showDialog() {
    this.visible = true;
  }

  showDialog2() {
    this.visible2 = true;
  }

  crearSala() {
    this.router.navigateByUrl('/lobby/sala-espera');
  }

  ingresarASala() {
    this.router.navigateByUrl('/lobby/sala-espera');
  }

}
