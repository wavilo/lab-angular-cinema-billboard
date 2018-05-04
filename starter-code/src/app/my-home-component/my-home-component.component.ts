import { Component, OnInit } from '@angular/core';
import { Movie, movieList } from './movie-data';
import { MovieInfoService } from '../movie-info.service';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent implements OnInit {

  constructor(
    public movieBlah: MovieInfoService,
  ) { }

  ngOnInit() {

  }

}

