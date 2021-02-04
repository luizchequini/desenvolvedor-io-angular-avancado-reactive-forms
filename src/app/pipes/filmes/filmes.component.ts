import { Component, OnInit } from '@angular/core';
import { Filme } from './Filme';
import { ImageFormaterPipe } from './image.pipe';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  providers: [
    ImageFormaterPipe
  ]
})
export class FilmesComponent implements OnInit {

  filmes: Filme[];
  mapped: Filme[];

  constructor(private imageFormat: ImageFormaterPipe) { }

  ngOnInit(): void {
    this.filmes = [
      {
        nome: 'Um sonho de liberdade',
        dataLancamento: new Date('12/07/1994'),
        valor: 150.00,
        imagem: 'umsonhodeliberdade.jpg',
        tamanho: '513326980'
      },
      {
        nome: 'o poderoso Chefão',
        dataLancamento: new Date('01/12/1972'),
        valor: 200.00,
        imagem: 'opoderosochefao1.jpg',
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
        imagem: 'pulpfictiontempodeviolência.jpg',
        tamanho: '773039680'
      },
      {
        nome: 'Godzilla II: Rei dos Monstros',
        dataLancamento: new Date('10/05/2019'),
        valor: 230.00,
        imagem: '',
        tamanho: '773039680'
      }
    ];

    this.mapped = this.filmes.map(filme =>{
      return{
        nome: filme.nome,
        dataLancamento: filme.dataLancamento,
        valor: filme.valor,
        tamanho: filme.tamanho,
        imagem: this.imageFormat.transform(filme.imagem, 'default', true)
      }
    })
  }

}
