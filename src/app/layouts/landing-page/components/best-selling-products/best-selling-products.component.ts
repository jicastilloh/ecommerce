import { Component, inject, input, signal } from '@angular/core';
import { BestSellingProductsInfoComponent } from '../best-selling-products-info/best-selling-products-info.component';
import { CategoriesCardComponent } from '../categories-card/categories-card.component';
import { ProductsService } from '../../../../products/services/products.service';
import { BestSellingProdInfo } from '../best-selling-products-info/interfaces/best-selling-product-info.interface';

@Component({
  selector: 'app-best-selling-products',
  imports: [BestSellingProductsInfoComponent],
  templateUrl: './best-selling-products.component.html',
})
export class BestSellingProductsComponent {
  bestSellingProducts = input<BestSellingProdInfo[]>();
}
