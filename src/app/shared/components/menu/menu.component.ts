import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [{
      label: 'Pipes Angular',
      icon: 'pi pi-desktop',
      items: [{
        label: 'Textos y Fechas',
        icon: 'pi pi-align-left',
        routerLink: '/'
      },
      {
        label: 'Números',
        icon: 'pi pi-dollar',
        routerLink: 'numbers'
      },
      {
        label: 'No comunes',
        icon: 'pi pi-globe',
        routerLink: 'uncommon'
      }
      ]
    },
    {
      label: 'Pipes personalizados',
      icon: 'pi pi-cog',
      items: [{
        label: 'Otros',
        icon: 'pi pi-globe'
      }]
    }
    ];
  }

}
