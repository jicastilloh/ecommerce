import { Component, inject, input, signal } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { BestSellingProdInfo } from '../../../layouts/landing-page/components/best-selling-products-info/interfaces/best-selling-product-info.interface';
import { BestSellingProductsInfoComponent } from '../../../layouts/landing-page/components/best-selling-products-info/best-selling-products-info.component';

@Component({
  selector: 'app-products-section',
  imports: [BestSellingProductsInfoComponent],
  templateUrl: './products-section.component.html',
})
export class ProductsSectionComponent {
  productsService = inject(ProductsService);

  products = input<BestSellingProdInfo[]>([]);

  // constructor() {
  //   this.productsService
  //     .getProducts()
  //     .subscribe((prods) => this.products.set(prods));
  // }
}
