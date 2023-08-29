import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  imgDetail: string = "";
  titleDetail: string = "";
  contentDetail: string = "";
  private id: string | null = "0";
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.id = value.get("id");
    });

    this.setValuesToComponent(this.id);

    if (localStorage.getItem("theme")) {
      document.body.classList.add('dark-theme');
    };
  }

  setValuesToComponent(id: string | null) {

    const result = dataFake.filter((article) => {
      return article.id == id;
    })[0];

    this.titleDetail = result.title;
    this.contentDetail = result.description;
    this.imgDetail = result.photo;
  }

}
