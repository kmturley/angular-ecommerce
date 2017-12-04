import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';

const routes: Routes = [
    { path: '', component: ProductComponent }
];

@NgModule({
    declarations: [ProductComponent],
    imports: [CommonModule, MatCardModule, RouterModule.forChild(routes)],
    providers: []
})
export class ProductModule { }
