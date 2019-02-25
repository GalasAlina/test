import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { BooksResolver } from '../shared/resolvers/book.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    resolve: {
      booksLoaded: BooksResolver
    }
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  providers: [],
  bootstrap: [],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
