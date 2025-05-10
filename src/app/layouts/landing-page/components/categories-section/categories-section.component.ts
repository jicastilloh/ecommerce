import { Component, input } from '@angular/core';
import { CategoriesCardComponent } from '../categories-card/categories-card.component';
import { Categories } from '../best-selling-products-info/interfaces/categories.interface';

@Component({
  selector: 'app-categories-section',
  imports: [CategoriesCardComponent],
  templateUrl: './categories-section.component.html',
})
export class CategoriesSectionComponent {
  categories = input<Categories[]>();
}
