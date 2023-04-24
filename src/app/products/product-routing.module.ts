import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductLayoutComponent } from './productLayout.component';
import { ProductListComponent } from './productlist.component';
import { AddEditProductComponent  } from './add-editProduct.component';

const routes: Routes = [
    {
        path: '', component: ProductLayoutComponent,
        children: [
            { path: '', component: ProductListComponent },
            { path: 'add', component: AddEditProductComponent },
            { path: 'edit/:id', component: AddEditProductComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }