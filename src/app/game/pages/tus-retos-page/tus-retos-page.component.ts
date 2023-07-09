import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-tus-retos-page',
  templateUrl: './tus-retos-page.component.html',
  styleUrls: ['./tus-retos-page.component.css']
})
export class TusRetosPageComponent {

  constructor(
    private router: Router
  ) {}

  public retos: string[] = [
    'Baila la vaca lola con el locote más loco del barrio',
    'Ve y declaratele al mesero con un taco',
    'Recibe a un comensal como si fueras el gerente del restaurant',
    'Choca los puños con la chica más linda del grupo',
    'Publica en tu story tu platillo favorito',
    'Quitate los tenis',
  ]




    // constructor(
    //   private photoService: PhotoService
    // ) {}

    // ngOnInit() {
    //     this.photoService.getImages().then((images) => {
    //         this.images = images;
    //     });
    // }

    navigateTo() {
      this.router.navigateByUrl('/game/resumen-juego');
    }

}
