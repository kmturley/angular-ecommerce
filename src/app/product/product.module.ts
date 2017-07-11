import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';

const routes: Routes = [
    { path: '', component: ProductComponent }
];

@NgModule({
    declarations: [ProductComponent],
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    providers: []
})
export class ProductModule { }
