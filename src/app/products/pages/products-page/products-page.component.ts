import { Component, effect, inject, signal } from '@angular/core';
import { HeardersComponent } from '../../components/hearders/hearders.component';
import { CategoriesListComponent } from '../../components/categories-list/categories-list.component';
import { ProductsSectionComponent } from '../../components/products-section/products-section.component';
import { ProductsService } from '../../services/products.service';
import { BestSellingProdInfo } from '../../../layouts/landing-page/components/best-selling-products-info/interfaces/best-selling-product-info.interface';
import { NotFoundComponent } from '../../../shared/components/not-found/not-found.component';
import { ActivatedRoute, Router } from '@angular/router';
import CatShow from '../../components/category-item/category-item.component';

@Component({
  selector: 'app-products-page',
  imports: [
    HeardersComponent,
    CategoriesListComponent,
    ProductsSectionComponent,
    NotFoundComponent,
  ],
  templateUrl: './products-page.component.html',
})
export class ProductsPageComponent {
  categoryName = signal<string>('All Categories');
  categoryId = signal<number>(0);
  products = signal<BestSellingProdInfo[]>([]);
  currentPage = signal<number>(1);
  itemsPerPage = signal<number>(3);
  totalItems = signal<number>(1);
  totalPages = signal<number>(1);

  productsService = inject(ProductsService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  // showTitle(cat: string) {
  //   this.categoryName.set(cat);
  //   this.currentPage.set(1);
  // }

  getProds = effect(() => {
    this.loadProducts();
  });

  // constructor() {
  //   this.loadProducts();
  // }
  constructor() {
    // Escucha los cambios en los query parameters
    this.route.queryParams.subscribe((params) => {
      const categoryId = params['categoryId'] ? +params['categoryId'] : 0;
      const page = params['page'] ? +params['page'] : 1;

      this.categoryId.set(categoryId);
      this.currentPage.set(page);

      this.loadProducts();
    });
  }

  loadProducts() {
    const offset = (this.currentPage() - 1) * this.itemsPerPage();
    this.productsService
      .getProductsByCategoryId(this.categoryId(), this.itemsPerPage(), offset)
      .subscribe((data) => {
        this.products.set(data.products);
        this.totalItems.set(data.totalItems);
        this.totalPages.set(this.totalItems() / this.itemsPerPage());
        if (data.products.at(0)?.category) {
          this.categoryName.set(data.products.at(0)?.category!);
        }
      });
  }

  nextPage() {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update((prev) => prev + 1);
      this.updateQueryParams();
    }
  }

  previousPage() {
    if (this.currentPage() > 1) {
      this.currentPage.update((prev) => prev - 1);
      this.updateQueryParams();
    }
  }

  showTitle({ categoryName, categoryId }: CatShow) {
    this.categoryName.set(categoryName);
    this.categoryId.set(categoryId);
    this.currentPage.set(1);
    this.updateQueryParams();
  }

  updateQueryParams() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        categoryId: this.categoryId(),
        page: this.currentPage(),
      },
      queryParamsHandling: 'merge',
    });
  }
}
