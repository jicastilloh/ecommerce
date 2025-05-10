import { Component, input } from '@angular/core';
import { BestSellingProdInfo } from './interfaces/best-selling-product-info.interface';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-best-selling-products-info',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './best-selling-products-info.component.html',
  styleUrl: './best-selling-products-info.component.css',
})
export class BestSellingProductsInfoComponent {
  bestProductInfo = input<BestSellingProdInfo>();
}
