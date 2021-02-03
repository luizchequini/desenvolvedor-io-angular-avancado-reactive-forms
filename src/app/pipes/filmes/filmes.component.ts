import { Component, OnInit } from '@angular/core';
import { Filme } from './Filme';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styles: [
  ]
})
export class FilmesComponent implements OnInit {

  filmes: Filme[];

  constructor() { }

  ngOnInit(): void {
    this.filmes = [
      {
        nome: 'Um sonho de liberdade',
        dataLancamento: new Date('12/07/1994'),
        valor: 150.00,
        imagem: 'sonhodeliberdade.jpg',
        tamanho: '513326980'
      },
      {
        nome: 'o poderoso Chefão',
        dataLancamento: new Date('01/12/1972'),
        valor: 200.00,
        imagem: 'opoderosochefao.jpg',
        tamanho: '1342177280'
      },
      {
        nome: 'BATMAM - O CAVALEIRO DAS TRAVAS',
        dataLancamento: new Date('08/01/2008'),
        valor: 70.00,
        imagem: 'batmanocavaleirodastrevas.jpg',
        tamanho: '719974720'
      },
      {
        nome: 'o poderoso chefão 2',
        dataLancamento: new Date('01/12/1974'),
        valor: 250.00,
        imagem: 'opoderosochefao2.jpg',
        tamanho: '1254589899'
      },
      {
        nome: 'Pulp Fiction - Tempo de Violência',
        dataLancamento: new Date('01/08/1994'),
        valor: 190.00,
        imagem: 'pulpfictiontempodeviolencia.jpg',
        tamanho: '773039680'
      }
    ]
  }

}
