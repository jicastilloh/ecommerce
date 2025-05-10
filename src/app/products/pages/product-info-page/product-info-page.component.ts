import { Component, inject, input, signal } from '@angular/core';
import { HeardersComponent } from '../../components/hearders/hearders.component';
import { CategoriesListComponent } from '../../components/categories-list/categories-list.component';
import { BestSellingProductsInfoComponent } from '../../../layouts/landing-page/components/best-selling-products-info/best-selling-products-info.component';
import { ProductsService } from '../../services/products.service';
import { BestSellingProdInfo } from '../../../layouts/landing-page/components/best-selling-products-info/interfaces/best-selling-product-info.interface';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-product-info-page',
  imports: [TitleCasePipe, CurrencyPipe],
  templateUrl: './product-info-page.component.html',
})
export class ProductInfoPageComponent {
  productsService = inject(ProductsService);

  productId = signal<number>(0);
  product = signal<BestSellingProdInfo | null>(null);

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      const id = +params['productId'];
      this.productId.set(id);

      this.productsService
        .getProductById(id)
        .subscribe((product: BestSellingProdInfo) => {
          this.product.set(product);
          console.log('Producto cargado:', product);
        });
    });
  }
}
