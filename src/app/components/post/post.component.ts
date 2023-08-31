import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  imgDetail: string = "";
  @Input()
  titleDetail: string = "";
  @Input()
  contentDetail: string = "";
  @Input()
  dateDetail:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
