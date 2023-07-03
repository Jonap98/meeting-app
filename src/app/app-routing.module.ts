import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameModule } from './game/game.module';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ) },
  { path: 'lobby', loadChildren: () => import('./lobby/lobby.module').then( m => m.LobbyModule ) },
  { path: 'game', loadChildren: () => import('./game/game.module').then( m => m.GameModule ) },
  { path: '', redirectTo: 'lobby', pathMatch: 'full' },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
}
