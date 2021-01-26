import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EditarProdutosComponent } from "./editar-produtos/editar-produtos.component";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { ProdutoAppComponent } from "./produto.app.component";

const produtoRouterConfig: Routes = [
    // {path: '', component: ProdutoDashboardComponent},
    // {path: 'editar/:id', component: EditarProdutosComponent}

    {path: '', component: ProdutoAppComponent, 
    children: [
        {path: '', component: ProdutoDashboardComponent},
        {path: 'editar/:id', component: EditarProdutosComponent}
    ]}
];

@NgModule({
   imports:[
       RouterModule.forChild(produtoRouterConfig)
   ],
   exports:[
       RouterModule
   ]
})
export class ProdutoRoutingModule{}