import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  constructor(
    public productsService: ProductsService,
    public modalService: ModalService
  ) {}
  // Запрос, чтобы корректно реализовать, использовать OnInit - жизненный цикл элемента
  ngOnInit(): void {
    this.loading = true;
    // this.products$ = this.productsService
    //   .getAll()
    //   .pipe(tap(() => (this.loading = false)));
    // ### №1 - Пример реализации запроса

    this.productsService.getAll().subscribe(() => {
      this.loading = false;
    });
  }
  // Нужен для №-1 примера запроса
  // products: IProduct[] = [];
  // products$: Observable<IProduct[]>;
  title = 'angular-first-project';
  loading = false;
  term = '';
}
