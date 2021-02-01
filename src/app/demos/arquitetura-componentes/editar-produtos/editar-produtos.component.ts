import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private route: ActivatedRoute, 
    private produtoService: ProdutoService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params
        .subscribe(params => {
          this.produto = this.produtoService.obterProdutoPorId(params['id']);
        });
  }

  salvar(){
    // Fazer comunicação para persistência no Backend

    //this.router.navigateByUrl('/produtos');
    this.router.navigate(['/produtos']);
  }

}
