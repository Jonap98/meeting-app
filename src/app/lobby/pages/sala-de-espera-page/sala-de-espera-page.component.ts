import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sala-de-espera-page',
  templateUrl: './sala-de-espera-page.component.html',
  styleUrls: ['./sala-de-espera-page.component.css']
})
export class SalaDeEsperaPageComponent {

  constructor(
    private router: Router
  ) {}

  comenzarJuego() {
    this.router.navigateByUrl('/game/resumen-juego');
  }

}
