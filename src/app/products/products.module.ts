import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
    declarations: [
        ProductsComponent
    ],
    imports: [CommonModule, ProductsRoutingModule, MaterialModule],
    providers: []
})
export class ProductsModule { }
