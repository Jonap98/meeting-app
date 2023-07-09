import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';


@Component({
  selector: 'app-resumen-de-juego-page',
  templateUrl: './resumen-de-juego-page.component.html',
  styleUrls: ['./resumen-de-juego-page.component.css']
})
export class ResumenDeJuegoPageComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  items: MenuItem[] | undefined;

  activeItem: MenuItem | undefined;

  ngOnInit() {
    this.items = [
        { label: 'Home', icon: 'pi pi-fw pi-home' },
        { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
    ];

    this.activeItem = this.items[0];
  }

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
  }

  navigateTo() {
    this.router.navigateByUrl('/game/tus-retos');
  }

  public visible: boolean = false;
  showPlayerProgress() {
    this.visible = true;
  }


}
