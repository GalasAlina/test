import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { BooksResolver } from '../shared/resolvers/book.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
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
export class HomeRoutingModule { }
