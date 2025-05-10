import { Component, input } from '@angular/core';
import { Categories } from '../best-selling-products-info/interfaces/categories.interface';
import { TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories-card',
  imports: [TitleCasePipe, RouterLink],
  templateUrl: './categories-card.component.html',
})
export class CategoriesCardComponent {
  category = input<Categories>();
}
