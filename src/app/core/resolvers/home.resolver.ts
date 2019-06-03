import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';

import { UserService } from '../services/user.service';

@Injectable()
export class UserResolver implements Resolve<firebase.User> {
    
    constructor(
        private readonly router: Router,
        private readonly userService: UserService,
    ) { }

    public async resolve(route: ActivatedRouteSnapshot) : Promise<firebase.User> {
        try {
            return await this.userService.getCurrentUser();
        } catch (error) {
            this.router.navigate(['/login']);
            return Promise.reject(error);            
        }
    }
}
