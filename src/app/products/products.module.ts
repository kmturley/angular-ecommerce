import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';

const routes: Routes = [
    { path: '', component: ProductsComponent }
];

@NgModule({
    declarations: [ProductsComponent],
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    providers: [],
    exports: [ProductsComponent]
})
export class ProductsModule { }
