import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-rigth',
  templateUrl: './card-rigth.component.html',
  styleUrls: ['./card-rigth.component.css']
})
export class CardRigthComponent implements OnInit {

  @Input()
  imgCardRigth:string = "";
  @Input()
  decriptionCardRigth:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
