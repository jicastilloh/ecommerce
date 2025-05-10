import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Categories } from '../../layouts/landing-page/components/best-selling-products-info/interfaces/categories.interface';
import { RESTCategories } from '../interfaces/rest-categories';
import MapperCategories from '../../layouts/landing-page/components/best-selling-products-info/helpers/mapper-categories';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  http = inject(HttpClient);

  getMainCategories(): Observable<Categories[]> {
    return this.http
      .get<RESTCategories[]>('https://api.escuelajs.co/api/v1/categories', {
        params: {
          limit: 3,
          offset: 0,
        },
      })
      .pipe(
        map((cats) =>
          MapperCategories.restCategoriesArrayToCategoriesArray(cats)
        )
      );
  }

  getAllCategories(): Observable<Categories[]> {
    return this.http
      .get<RESTCategories[]>('https://api.escuelajs.co/api/v1/categories')
      .pipe(
        map((cats) =>
          MapperCategories.restCategoriesArrayToCategoriesArray(cats)
        )
      );
  }
}
