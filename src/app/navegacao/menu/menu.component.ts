import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  nav: Nav[] = [
    {
      link: '/home',
      name: 'Home',
      exact: true,
      admin: false
    },
    {
      link: '/cadastro',
      name: 'Cadastro',
      exact: true,
      admin: false
    },
    {
      link: '/produtos-dashboard',
      name: 'Produto',
      exact: true,
      admin: false
    },
    {
      link: '/sobre',
      name: 'Sobre',
      exact: true,
      admin: false
    },
    {
      link: '/contato',
      name: 'Contato',
      exact: true,
      admin: false
    },
    {
      link: '/feature',
      name: 'Feature',
      exact: true,
      admin: false
    }
  ]
}

interface Nav{
  link: string,
  name: string,
  exact: boolean,
  admin: boolean
}