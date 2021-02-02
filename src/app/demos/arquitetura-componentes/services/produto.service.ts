import { Injectable } from "@angular/core";
import { Produto } from "../models/produto";

@Injectable()
export class ProdutoService{
    produtos: Produto[];

    constructor(){
        this.produtos = 
        [
          {
              id: 1,
              nome: "Mouse Microsoft",
              valor: 15.90,
              promocao: true,
              valorPromocao: 10.00,
              imagem: "mouse.jpg"
          },
          {
              id: 2,
              nome: "Teclado Microsoft",
              valor: 30.00,
              promocao: false,
              valorPromocao: 0,
              imagem: "teclado.jpg"
          },
          {
              id: 3,
              nome: "Monitor Sansung",
              valor: 250.00,
              promocao: false,
              valorPromocao: 0,
              imagem: "monitor.jpeg"
          },
          {
              id: 4,
              nome: "Laptop Asus",
              valor: 3000.00,
              promocao: false,
              valorPromocao: 0,
              imagem: "laptop.jpg"
          },
          {
              id: 5,
              nome: "Webcam Logitech",
              valor: 90.00,
              promocao: false,
              valorPromocao: 0,
              imagem: "webcam.jpg"
          },
          {
              id: 6,
              nome: "Galaxy S10+",
              valor: 2800.00,
              promocao: true,
              valorPromocao: 2500.99,
              imagem: "celular.jpeg"
          },
          {
              id: 7,
              nome: "Go Pro 8",
              valor: 300.00,
              promocao: false,
              valorPromocao: 0,
              imagem: "gopro.png"
          },
          {
              id: 8,
              nome: "Relógio Xiaomi",
              valor: 150.00,
              promocao: false,
              valorPromocao: 0,
              imagem: "relogio.jpg"
          }
        ];
    }

    obterTodosProdutos(estado: string): Produto[]{

        if(estado === 'promoção'){
            return this.produtos.filter(produtos => produtos.promocao);
        }
        
        return this.produtos;
    }

    obterProdutoPorId(id: number): Produto{
        return this.produtos.find(produto => produto.id == id);
    }
}