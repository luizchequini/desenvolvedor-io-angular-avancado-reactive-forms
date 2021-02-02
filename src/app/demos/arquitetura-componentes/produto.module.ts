import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { ProdutoDetalheComponent } from "./componentes/produto-card-detalhe.component";
import { ProdutoCountComponent } from "./componentes/produto-count-component";
import { ProdutoRoutingModule } from "./produto.route";
import { EditarProdutosComponent } from './editar-produtos/editar-produtos.component';
import { ProdutoAppComponent } from "./produto.app.component";
import { ProdutoService } from "./services/produto.service";
import { ProdutosResolve } from "./services/produtos.resolve";

@NgModule({
    declarations:[
        ProdutoAppComponent,
        ProdutoDashboardComponent,
        ProdutoDetalheComponent,
        ProdutoCountComponent,
        EditarProdutosComponent
    ],
    imports:[
        CommonModule,
        ProdutoRoutingModule
    ],
    exports:[
        
    ],
    providers:[
        ProdutoService,
        ProdutosResolve
    ]
})
export class ProdutoModule{}