import { NgModule } from '@angular/core';

import { AuthGuard } from './guards/auth.guard';
import { UserResolver } from './resolvers/home.resolver';

@NgModule({
    imports: [],
    providers: [
        AuthGuard,
        UserResolver
    ]
})
export class CoreModule { }