import { Component } from '@angular/core';
import { interval } from 'rxjs';

type Gender = 'Male' | 'Female'

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18nSelect
  name: string = 'Daniel'
  gender: Gender = 'Male'
  invitationMap = {
    'Male': 'invitarlo',
    'Female': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Daniel', 'Fernanda', 'Laura', 'Jose', 'Guillermo', 'Luz', 'Nataly']
  clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  //KeyValuePipe

  person = {
    name: 'Daniel',
    age: '23',
    city: 'Bogotá'
  }

  //Async Pipe

  observableTime = interval(2000)

  promiseValue = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos información en la promesa.')
      console.log('Tenemos información en la promesa.')
    }, 3500);
  })

  changeClient() {
    this.name = 'Melisa'
    this.gender = 'Female'
  }

  deleteClient() {
    this.clientes.pop()
  }

}
function internal() {
  throw new Error('Function not implemented.');
}

