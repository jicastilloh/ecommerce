import { Component, input, output } from '@angular/core';
import { Categories } from '../../../layouts/landing-page/components/best-selling-products-info/interfaces/categories.interface';
import { RouterLink, RouterLinkActive } from '@angular/router';

export default interface CatShow {
  categoryName: string;
  categoryId: number;
}

@Component({
  selector: 'app-category-item',
  imports: [],
  templateUrl: './category-item.component.html',
})
export class CategoryItemComponent {
  category = input<Categories>();

  categoryInfo = output<CatShow>();
}
