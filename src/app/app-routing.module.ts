import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from 'app/home/home.component';

const routes: Routes = [
    {
        pathMatch: 'full',
        path: '',
        component: HomeComponent
    },
    {
        pathMatch: 'full',
        path: 'products',
        loadChildren: 'app/products/products.module#ProductsModule'
    },
    {
        pathMatch: 'full',
        path: 'products/:product',
        loadChildren: 'app/product/product.module#ProductModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
