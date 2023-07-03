import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { ResumenDeJuegoPageComponent } from './pages/resumen-de-juego-page/resumen-de-juego-page.component';
import { TusRetosPageComponent } from './pages/tus-retos-page/tus-retos-page.component';
import { KnobModule } from 'primeng/knob';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ResumenDeJuegoPageComponent,
    TusRetosPageComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    KnobModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class GameModule { }
