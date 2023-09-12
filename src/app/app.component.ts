import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { ProductsService } from './services/products.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private productsService: ProductsService) {}
  // Запрос, чтобы корректно реализовать, использовать OnInit - жизненный цикл элемента
  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.productsService
      .getAll()
      .pipe(tap(() => (this.loading = false)));
    // ### №1 - Пример реализации запроса

    // this.productsService.getAll().subscribe((products) => {
    //   this.products = products;
    //   this.loading = false;
    // });
  }
  // Нужен для №-1 примера запроса
  // products: IProduct[] = [];
  products$: Observable<IProduct[]>;
  title = 'angular-first-project';
  loading = false;
  term = '';
}
