import { Injectable, Injector } from '@angular/core';
import { GeneralService } from './general.service';
import { User } from './user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService extends GeneralService<User> {

    constructor(protected injector: Injector) {
        super("https://jsonplaceholder.typicode.com/users", injector);
    }
  
}
