import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmInfoComponent } from './film-list/film-info/film-info.component';
import { FilmListComponent } from './film-list/film-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'flist', component: FilmListComponent },
  { path: 'flist/info', component: FilmInfoComponent },
 // { path: '**', component: FilmListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
