import { Injectable } from '@angular/core';
import { Movie, movieList } from './my-home-component/movie-data';


@Injectable()
export class MovieInfoService {

  movies: Array<Movie> = movieList
  

  constructor() { }



  getMovie(id: any){
    let movieInfo;

    this.movies.forEach((oneMovie)=>{
      if (oneMovie.id === id){
        movieInfo = oneMovie;
      }
    });
    return movieInfo;
  }

}


