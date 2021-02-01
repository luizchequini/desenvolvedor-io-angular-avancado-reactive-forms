import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../models/produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-editar-produtos',
  templateUrl: './editar-produtos.component.html',
  styles: [
  ]
})
export class EditarProdutosComponent implements OnInit {

  produto: Produto;

  constructor(private route: ActivatedRoute, private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.route.params
        .subscribe(params => {
          this.produto = this.produtoService.obterProdutoPorId(params['id']);
        });
  }

}
