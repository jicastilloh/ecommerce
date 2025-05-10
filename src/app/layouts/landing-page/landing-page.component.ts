import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { BestSellingProductsComponent } from './components/best-selling-products/best-selling-products.component';
import { Component, inject, signal } from '@angular/core';
import { ProductsService } from '../../products/services/products.service';
import { BestSellingProdInfo } from './components/best-selling-products-info/interfaces/best-selling-product-info.interface';
import { CategoriesService } from '../../categories/services/categories.service';
import { Categories } from './components/best-selling-products-info/interfaces/categories.interface';
import { CategoriesComponent } from '../../categories/pages/categories/categories.component';
import { CategoriesSectionComponent } from './components/categories-section/categories-section.component';
import { WhyChooseUsSectionComponent } from './components/why-choose-us-section/why-choose-us-section.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    HeroSectionComponent,
    BestSellingProductsComponent,
    CategoriesSectionComponent,
    WhyChooseUsSectionComponent,
  ],
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent {
  productsService = inject(ProductsService);
  categoriesService = inject(CategoriesService);

  products = signal<BestSellingProdInfo[]>([]);
  categories = signal<Categories[]>([]);

  constructor() {
    this.productsService
      .getBestProducts()
      .subscribe((prods: BestSellingProdInfo[]) => {
        this.products.set(prods);
      });

    this.categoriesService
      .getMainCategories()
      .subscribe((cats: Categories[]) => {
        this.categories.set(cats);
      });
  }
}
