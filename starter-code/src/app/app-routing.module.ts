import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyHomeComponentComponent } from './my-home-component/my-home-component.component';
import { MyMovieComponent } from './my-movie/my-movie.component';


const routes: Routes = [
  
  {path: 'home', component: MyHomeComponentComponent},
  {path: 'movie/:blahId', component: MyMovieComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

