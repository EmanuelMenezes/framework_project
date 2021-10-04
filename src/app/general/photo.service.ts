import { Injectable, Injector } from '@angular/core';
import { GeneralService } from './general.service';
import { Photo } from './photo.model';

@Injectable({
    providedIn: 'root'
})
export class PhotoService extends GeneralService<Photo> {

    constructor(protected injector: Injector) {
        super("https://jsonplaceholder.typicode.com/photos", injector);
    }
  
}
