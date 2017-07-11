import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
    declarations: [
        ProductComponent
    ],
    imports: [CommonModule, ProductRoutingModule, MaterialModule],
    providers: []
})
export class ProductModule { }
