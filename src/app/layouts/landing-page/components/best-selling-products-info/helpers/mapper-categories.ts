import { RESTCategories } from '../../../../../categories/interfaces/rest-categories';
import { RESTProduct } from '../../../../../products/interfaces/rest-products.interface';
import { BestSellingProdInfo } from '../interfaces/best-selling-product-info.interface';
import { Categories } from '../interfaces/categories.interface';

export default class MapperCategories {
  static restCategoriesToCategories(restCat: RESTCategories): Categories {
    const response: Categories = {
      id: restCat.id,
      name: restCat.name,
      image: restCat.image,
    };

    return response;
  }

  static restCategoriesArrayToCategoriesArray(
    restCats: RESTCategories[]
  ): Categories[] {
    const result: Categories[] = restCats.map((restCat) =>
      this.restCategoriesToCategories(restCat)
    );

    return result;
  }
}
