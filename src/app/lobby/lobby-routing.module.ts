import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeleccionDeJuegoPageComponent } from './pages/seleccion-de-juego-page/seleccion-de-juego-page.component';
import { CrearPartidaPageComponent } from './pages/crear-partida-page/crear-partida-page.component';
import { IngresarSalaPageComponent } from './pages/ingresar-sala-page/ingresar-sala-page.component';
import { SalaDeEsperaPageComponent } from './pages/sala-de-espera-page/sala-de-espera-page.component';

const routes: Routes = [
  { path: 'seleccion-juego', component: SeleccionDeJuegoPageComponent },
  { path: 'crear-partida', component: CrearPartidaPageComponent },
  { path: 'ingresar-sala', component: IngresarSalaPageComponent },
  { path: 'sala-espera', component: SalaDeEsperaPageComponent },
  // { path: '', redirectTo: 'seleccion-juego' },
  { path: '**', redirectTo: 'seleccion-juego' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LobbyRoutingModule { }
