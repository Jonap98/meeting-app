import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { ResumenDeJuegoPageComponent } from './pages/resumen-de-juego-page/resumen-de-juego-page.component';
import { TusRetosPageComponent } from './pages/tus-retos-page/tus-retos-page.component';
import { KnobModule } from 'primeng/knob';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SpeedDialModule } from 'primeng/speeddial';
import { TabMenuModule } from 'primeng/tabmenu';
import { ProgressBarModule } from 'primeng/progressbar';
import { DialogModule } from 'primeng/dialog';
import { GalleriaModule } from 'primeng/galleria';
// import { RippleModule } from 'primeng/ripple';



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
    FormsModule,
    SpeedDialModule,
    TabMenuModule,
    ProgressBarModule,
    DialogModule,
    GalleriaModule,
  ]
})
export class GameModule { }
