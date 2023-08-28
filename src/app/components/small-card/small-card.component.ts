import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCard implements OnInit {

  @Input()
  titleSmallCard:string = "";
  @Input()
  descriptionSmallCard:string = "";


  constructor() { }

  ngOnInit(): void {
  }

}