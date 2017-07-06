import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
    declarations: [
        ProductsComponent
    ],
    imports: [CommonModule, ProductsRoutingModule],
    providers: []
})
export class ProductsModule { }
