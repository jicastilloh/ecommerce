import { RESTProduct } from '../../../../../products/interfaces/rest-products.interface';
import { BestSellingProdInfo } from '../interfaces/best-selling-product-info.interface';

export default class MapperBestSellingProdInfo {
  static restProdToBestSellingProdInfo(
    restProd: RESTProduct
  ): BestSellingProdInfo {
    const response: BestSellingProdInfo = {
      id: restProd.id,
      title: restProd.title,
      price: restProd.price,
      category: restProd.category.name,
      description: restProd.description,
      images: restProd.images.at(0) ?? '',
    };

    return response;
  }

  static restProdArrayToBestSellingProdInfoArray(
    restProds: RESTProduct[]
  ): BestSellingProdInfo[] {
    const result: BestSellingProdInfo[] = restProds.map((restProd) =>
      this.restProdToBestSellingProdInfo(restProd)
    );

    return result;
  }
}
