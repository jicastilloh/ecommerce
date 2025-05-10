import { Routes } from '@angular/router';
import { LandingPageComponent } from './layouts/landing-page/landing-page.component';
import { ProductsPageComponent } from './products/pages/products-page/products-page.component';
import { CategoriesComponent } from './categories/pages/categories/categories.component';
import { EcommerceContainerComponent } from './shared/components/ecommerce-container/ecommerce-container.component';
import { ProductInfoPageComponent } from './products/pages/product-info-page/product-info-page.component';

export const routes: Routes = [
  {
    path: 'ecommerce',
    title: 'ecommerce',
    component: EcommerceContainerComponent,
    children: [
      {
        path: '',
        component: LandingPageComponent,
        pathMatch: 'full',
      },
      {
        path: 'products',
        title: 'Products',
        component: ProductsPageComponent,
      },
      {
        path: 'products/info/:productId',
        title: 'ProductInfo',
        component: ProductInfoPageComponent,
      },
      {
        path: 'categories',
        title: 'Categories',
        component: CategoriesComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: 'ecommerce',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'ecommerce',
  },
];
