import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumenDeJuegoPageComponent } from './pages/resumen-de-juego-page/resumen-de-juego-page.component';
import { TusRetosPageComponent } from './pages/tus-retos-page/tus-retos-page.component';

const routes: Routes = [
  { path: 'resumen-juego', component: ResumenDeJuegoPageComponent },
  { path: 'tus-retos', component: TusRetosPageComponent },
  { path: '**', redirectTo: 'resumen-juego' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
