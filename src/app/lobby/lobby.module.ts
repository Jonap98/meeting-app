import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

import { LobbyRoutingModule } from './lobby-routing.module';
import { SeleccionDeJuegoPageComponent } from './pages/seleccion-de-juego-page/seleccion-de-juego-page.component';
import { CrearPartidaPageComponent } from './pages/crear-partida-page/crear-partida-page.component';
import { IngresarSalaPageComponent } from './pages/ingresar-sala-page/ingresar-sala-page.component';
import { SalaDeEsperaPageComponent } from './pages/sala-de-espera-page/sala-de-espera-page.component';


@NgModule({
  declarations: [
    SeleccionDeJuegoPageComponent,
    CrearPartidaPageComponent,
    IngresarSalaPageComponent,
    SalaDeEsperaPageComponent
  ],
  imports: [
    CommonModule,
    LobbyRoutingModule,
    DialogModule,
    ButtonModule
  ]
})
export class LobbyModule { }
