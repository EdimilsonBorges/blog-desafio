import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-rigth',
  templateUrl: './card-rigth.component.html',
  styleUrls: ['./card-rigth.component.css']
})
export class CardRigthComponent implements OnInit {

  @Input()
  id = "0";
  @Input()
  imgCardRigth:string = "";
  @Input()
  dateCardRigth = "";
  @Input()
  decriptionCardRigth:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
