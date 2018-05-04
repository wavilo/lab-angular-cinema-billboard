import { Component, OnInit } from '@angular/core';
import { Movie } from '../my-home-component/movie-data';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieInfoService } from '../movie-info.service';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {

  movieId: any;
  movieInfo: Movie;

  constructor(
    private reqBlah: ActivatedRoute,
    public movieBlah: MovieInfoService,
    private resThang: Router
  ) { }

  ngOnInit() {
    this.reqBlah.paramMap.subscribe((myParams)=>{
      //console.log(myParams);
      this.movieId = myParams.get('blahId');
      this.movieInfo = this.movieBlah.getMovie(this.movieId);
      console.log(this.movieInfo);
    });
  }

}
