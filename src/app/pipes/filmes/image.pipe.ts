import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'imageformaterpipe'
})
export class ImageFormaterPipe implements PipeTransform{
    transform(imagem: string, caminho: string = '', substituir: boolean) {
        
        if(caminho == 'default'){
            caminho = 'assets'
        }
        
        if(imagem.length == 0 && substituir){
            imagem = 'semimagem.jpg'
        }

        return "/" + caminho + "/" + imagem
    }

}