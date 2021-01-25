import { Component, Input } from "@angular/core";
import { Produto } from "../models/produto";


@Component({
    selector:'produto-count',
    template:
    `
        <div>
            <div>
                Produtos em promoção {{ contadorPromocao() }} no total de {{ListaDeprodutos.length}} produtos<br /><br />
            </div>
        </div>
    `
})
export class ProdutoCountComponent{
    @Input() ListaDeprodutos: Produto[];

    contadorPromocao(): number{
        if(!this.ListaDeprodutos) return;

        return this.ListaDeprodutos.filter((ListaDeprodutos: Produto) => ListaDeprodutos.promocao).length;
    }
}