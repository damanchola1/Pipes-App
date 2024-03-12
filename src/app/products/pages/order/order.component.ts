import { Component } from '@angular/core';
import { Color, IHero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  isUpperCase = false
  heroes: IHero[] = [{
    name: 'Superman',
    canFly: true,
    color: Color.blue
  },
  {
    name: 'Spiderman',
    canFly: false,
    color: Color.red
  },
  {
    name: 'Batman',
    canFly: false,
    color: Color.black
  },
  {
    name: 'Robin',
    canFly: false,
    color: Color.green
  },
  {
    name: 'Linterna Verde',
    canFly: true,
    color: Color.green
  }]

  sortBy: keyof IHero | '' = ''

  toggleUpperCase() {
    this.isUpperCase = !this.isUpperCase
  }

  changeOrder(value: keyof IHero) {
    this.sortBy = value
  }

}
