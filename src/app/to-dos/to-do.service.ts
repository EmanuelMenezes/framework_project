import { Injectable, Injector } from '@angular/core';
import { GeneralService } from '../general/general.service';
import { ToDo } from './to-do.model';
@Injectable({
    providedIn: 'root'
})
export class ToDoService extends GeneralService<ToDo> {

    constructor(protected injector: Injector) {
        super("https://jsonplaceholder.typicode.com/todos", injector);
    }

}
