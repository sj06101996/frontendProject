import { Component } from '@angular/core';

import { AccountService } from './_services';
import { User } from './_models';
import { Product } from './_models';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent {

    user?: User | null;
    product?: Product | null;
    

    constructor(private accountService: AccountService) {
        this.accountService.user.subscribe(x => this.user = x);
        this.accountService.product.subscribe(x => this.product = x);
    }

    logout() {
        this.accountService.logout();
    }
}