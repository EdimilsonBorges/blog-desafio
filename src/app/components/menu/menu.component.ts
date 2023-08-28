import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input()
  urlLinkedin:string = "";
  @Input()
  urlGitHub:string = "";
  @Input()
  urlInstagran:string= "";

  constructor() { }

  ngOnInit(): void {
  }

}
