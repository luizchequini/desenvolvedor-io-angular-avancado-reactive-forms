import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, Observable } from 'rxjs';
import { ProdutoDetalheComponent } from '../componentes/produto-card-detalhe.component';
import { ProdutoCountComponent } from '../componentes/produto-count-component';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html', 
  styles: [
  ]
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit {

  ListaDeprodutos: Produto[];

  @ViewChild(ProdutoCountComponent, {static: false}) contador: ProdutoCountComponent;
  @ViewChild('teste', {static: false}) mensagemTela: ElementRef;

  @ViewChildren(ProdutoDetalheComponent) botoes: QueryList<ProdutoDetalheComponent>;

  constructor(private route: ActivatedRoute) { }

  ngAfterViewInit(): void {

    console.log('Objeto do contado: ', this.contador.ListaDeprodutos);

    let clickTexto: Observable<any> = fromEvent(this.mensagemTela.nativeElement, 'click');
    clickTexto.subscribe(() =>{
      alert('Clicou no texto!');
      return;
    })

    console.log(this.botoes.forEach(p => {
      console.log(p.produto);
    }))
  }

  ngOnInit() {
    this.ListaDeprodutos = this.route.snapshot.data['inRouteProdutosResolve'];
  }

  mudarStatus(event: Produto){
    event.promocao = !event.promocao;
    event.valorPromocao = event.valor - (event.valor * 0,1);
  }

}
