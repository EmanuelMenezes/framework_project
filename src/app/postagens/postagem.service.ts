import { Injectable, Injector } from '@angular/core';
import { GeneralService } from '../general/general.service';
import { Postagem } from './postagem.model';
@Injectable({
    providedIn: 'root'
})
export class PostagemService extends GeneralService<Postagem> {

    constructor(protected injector: Injector) {
        super("https://jsonplaceholder.typicode.com/posts", injector);
    }

}
