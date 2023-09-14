import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Post|any = {
    id: "",
    photo: "",
    title: "",
    description: "",
    date: ""
  };

  constructor() {
  }

  ngOnInit(): void {
    if(localStorage.getItem("theme")){
      document.body.classList.add('dark-theme');
    };
    this.posts = dataFake;
  }
}
type Post = {
  id: string;
  photo: string;
  title: string;
  description: string;
  date: string;
}

