import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AccountService } from '@app/_services';

@Component({ templateUrl: 'productlist.component.html' })
export class ProductListComponent implements OnInit {
    products?: any[];

    constructor(private accountService: AccountService) {}

    ngOnInit() {
        this.accountService.getAll()
            .pipe(first())
            .subscribe(products => this.products = products);
    }

    deleteProduct(id: string) {
        const product = this.products!.find(x => x.id === id);
        product.isDeleting = true;
        this.accountService.delete(id)
            .pipe(first())
            .subscribe(() => this.products = this.products!.filter(x => x.id !== id));
    }
}