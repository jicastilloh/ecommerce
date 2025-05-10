import { Component, inject, signal } from '@angular/core';
import { CategoriesSectionComponent } from '../../../layouts/landing-page/components/categories-section/categories-section.component';
import { Categories } from '../../../layouts/landing-page/components/best-selling-products-info/interfaces/categories.interface';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categories',
  imports: [CategoriesSectionComponent],
  templateUrl: './categories.component.html',
})
export class CategoriesComponent {
  categoriesService = inject(CategoriesService);

  categories = signal<Categories[]>([]);

  constructor() {
    this.categoriesService
      .getAllCategories()
      .subscribe((cats: Categories[]) => {
        this.categories.set(cats);
      });
  }
}
