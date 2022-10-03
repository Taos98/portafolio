import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Sobre mí',
        icon: 'pi pi-fw pi-file',
        
        items: [
          {
            label: 'Educación',
            icon: 'pi pi-fw pi-pencil',
          },
          {
            label: 'Experiencia laboral',
            icon: 'pi pi-fw pi-briefcase',
          },
          {
            label: 'Tecnologias',
            icon: 'pi pi-fw pi-cog',
          },
          {
            label: 'Contacto',
            icon: 'pi pi-fw pi-envelope',
          },
        ],
      },
      {
        label: 'Proyectos',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Proyecto1',
            icon: 'pi pi-fw pi-align-left',
          },
          {
            label: 'Proyecto2',
            icon: 'pi pi-fw pi-align-right',
          },
          {
            label: 'Proyecto3',
            icon: 'pi pi-fw pi-align-center',
          },
          {
            label: 'Proyecto4',
            icon: 'pi pi-fw pi-align-justify',
          },
        ],
      },
    ];
  }
}
