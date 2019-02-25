import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookItemComponent } from './book-item/book-item.component';
import { BooksResolver } from './resolvers/book.resolver';
import { BookService } from './services/book.service';
import { EffectsModule } from '@ngrx/effects';
import { BookCollectionEffects } from './store/effects';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forRoot([BookCollectionEffects])
  ],
  declarations: [BookItemComponent],
  exports: [BookItemComponent],
  providers: [BooksResolver, BookService]
})
export class SharedModule { }
