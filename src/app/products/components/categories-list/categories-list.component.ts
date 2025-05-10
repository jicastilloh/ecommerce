import { Component, inject, input, output, signal } from '@angular/core';
import { Categories } from '../../../layouts/landing-page/components/best-selling-products-info/interfaces/categories.interface';
import { CategoriesService } from '../../../categories/services/categories.service';
import CatShow, {
  CategoryItemComponent,
} from '../category-item/category-item.component';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-categories-list',
  imports: [CategoryItemComponent],
  templateUrl: './categories-list.component.html',
})
export class CategoriesListComponent {
  categoriesService = inject(CategoriesService);

  categoriesList = signal<Categories[]>([]);

  categoryName = output<string>();
  categoryId = output<number>();

  categorySelected = output<CatShow>();

  constructor() {
    this.categoriesService
      .getAllCategories()
      .subscribe((cats) => this.categoriesList.set(cats));
  }

  showCat(categoryInfo: CatShow) {
    this.categorySelected.emit(categoryInfo);
  }
}
