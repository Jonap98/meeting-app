import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RippleModule } from 'primeng/ripple';
import { PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';



const initializeAppFactory = (primeConfig: PrimeNGConfig) => () => {
  // ......
  primeConfig.ripple = true;
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DialogModule,
    RippleModule,
    ButtonModule,
    // GalleriaModule,
  ],
  providers: [
    {
       provide: APP_INITIALIZER,
       useFactory: initializeAppFactory,
       deps: [PrimeNGConfig],
       multi: true,
    },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
