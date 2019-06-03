import { Injectable } from '@angular/core';
import {
    Router,
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

import { UserService } from '../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private readonly router: Router,
        private readonly userService: UserService
    ) { }

    public async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        try {
            await this.userService.getCurrentUser();
            return true;
        } catch (error) {
            this.router.navigate(['/login']);
            return false;
        }
    }
}

