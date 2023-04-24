import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { ProductLayoutComponent } from './productLayout.component';
import { ProductListComponent } from './productlist.component';
import { AddEditProductComponent  } from './add-editProduct.component';
import { ProductsRoutingModule } from './product-routing.module';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ProductsRoutingModule
    ],
    declarations: [
        ProductLayoutComponent,
        ProductListComponent,
        AddEditProductComponent

    ]
})
export class productsModule { }