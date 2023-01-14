import { HttpClient } from '@angular/common/http';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss'],
})
export class FilmListComponent implements OnInit {
  movies: any;
  cmovies: any;
  modal:any = false;
  currmovie:any;
  pages: number = 1;
  pageno: any[] = [];
  currpage: any = 1;
  // window=window;

  constructor(public http: HttpClient,private route:Router) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    for (let i = 0; i < 4546; i++) {
      this.pageno[i] = i + 1;
    }
    this.http
      .get('https://demo.credy.in/api/v1/maya/movies/?page=' + this.currpage)
      .subscribe((data: any) => {
        this.movies = data.results;
        this.cmovies=data.results;
        console.log(data);
        // console.log(this.movies.results);
      });
  }
  openMovie(e:any)
  {
    console.log(e);
    this.currmovie = e;
    this.modal = true;

  }
  closeMovie()
  {
    this.modal=false;
    this.currmovie = null;
  }

  pageChanged(e: any) {
    this.currpage = e;
    console.log(e);
    this.getMovies();
  }
  refresh()
  {
    // this.route.navigateByUrl(this.route.url);
    window.location.reload();
  }
  search(e:any)
  {
    e=e.value.toLowerCase();
    if(e.length<3 || e.trim() == '')
    {this.movies = this.cmovies;}
    if(e.length<3)
    return;
    setTimeout(function(){},250);
    let results = this.movies.filter((element:any) => {
      if(element.title.toLowerCase().includes(e))
      {
        return element;
      }
    });
    this.movies=results;
  }
}
