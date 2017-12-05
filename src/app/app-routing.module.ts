import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
      pathMatch: 'full',
      path: '',
      component: HomeComponent
    },
    {
      path: 'modules/product',
      loadChildren: 'app/product/product.module#ProductModule'
    },
    {
      path: 'modules/products',
      loadChildren: 'app/products/products.module#ProductsModule'
    }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
