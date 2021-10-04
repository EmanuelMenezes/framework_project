import { Injectable, Injector } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { GeneralService } from '../general/general.service';
import { Album } from './album.model';
@Injectable({
    providedIn: 'root'
})
export class AlbumService extends GeneralService<Album> {

    constructor(protected injector: Injector) {
        super("https://jsonplaceholder.typicode.com/albums", injector);
    }

}
