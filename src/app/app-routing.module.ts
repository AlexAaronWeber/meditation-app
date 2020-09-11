import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MedSearchComponent } from './med-search/med-search.component';
import { MusSearchComponent } from './mus-search/mus-search.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'meditations', component: MedSearchComponent },
  { path: 'music', component: MusSearchComponent },
  { path: 'book', component: BookSearchComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
