import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {

  @Input()
  nomeBlog:string = "";
  @Input()
  msgWelcome:string = "";
  @Input()
  autorName:string = "";
  @Input()
  btnText:string = "";
  @Input()
  linkDetails:string = "";
  @Input()
  msgDetails:string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToNews() {
    this.router.navigate(['posts']);
  }

}
