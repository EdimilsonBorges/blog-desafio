import { Component, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

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

    if (localStorage.getItem("theme")) {
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