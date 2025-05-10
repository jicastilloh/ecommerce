import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable, tap } from 'rxjs';
import { BestSellingProdInfo } from '../../layouts/landing-page/components/best-selling-products-info/interfaces/best-selling-product-info.interface';
import { RESTProduct } from '../interfaces/rest-products.interface';
import MapperBestSellingProdInfo from '../../layouts/landing-page/components/best-selling-products-info/helpers/mapper-best-selling-product-info';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  http = inject(HttpClient);

  getBestProducts(): Observable<BestSellingProdInfo[]> {
    return this.http
      .get<RESTProduct[]>('https://api.escuelajs.co/api/v1/products', {
        params: {
          limit: 5,
          offset: 0,
        },
      })
      .pipe(
        map((restProds: RESTProduct[]) => {
          return MapperBestSellingProdInfo.restProdArrayToBestSellingProdInfoArray(
            restProds
          );
        })
      );
  }

  getProducts(): Observable<BestSellingProdInfo[]> {
    return this.http
      .get<RESTProduct[]>('https://api.escuelajs.co/api/v1/products')
      .pipe(
        map((restProds: RESTProduct[]) => {
          return MapperBestSellingProdInfo.restProdArrayToBestSellingProdInfoArray(
            restProds
          );
        })
      );
  }

  getProductById(productId: number): Observable<BestSellingProdInfo> {
    return this.http
      .get<RESTProduct>(`https://api.escuelajs.co/api/v1/products/${productId}`)
      .pipe(
        map((product: RESTProduct) => {
          return MapperBestSellingProdInfo.restProdToBestSellingProdInfo(
            product
          );
        })
      );
  }

  getProductsByCategoryId(
    categoryId: number = -1,
    limit: number = 3,
    offset: number = 0
  ): Observable<{ totalItems: number; products: BestSellingProdInfo[] }> {
    // Observable para obtener el total de productos
    const totalItems$ = this.http
      .get<RESTProduct[]>('https://api.escuelajs.co/api/v1/products', {
        params: {
          categoryId: categoryId !== -1 ? categoryId.toString() : '',
        },
      })
      .pipe(map((restProds) => restProds.length)); // Calcula el total de productos

    // Observable para obtener los productos paginados
    const products$ = this.http
      .get<RESTProduct[]>('https://api.escuelajs.co/api/v1/products', {
        params: {
          categoryId: categoryId !== -1 ? categoryId.toString() : '',
          limit: limit.toString(),
          offset: offset.toString(),
        },
      })
      .pipe(
        map((restProds) => {
          return MapperBestSellingProdInfo.restProdArrayToBestSellingProdInfoArray(
            restProds
          );
        })
      );

    // Combina ambos observables en uno solo
    return forkJoin({ totalItems: totalItems$, products: products$ });
  }
}
