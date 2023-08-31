import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-about',
  templateUrl: './content-about.component.html',
  styleUrls: ['./content-about.component.css']
})
export class ContentAboutComponent implements OnInit {

  @Input()
  titleH3:string = "";
  @Input()
  paragraph:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
