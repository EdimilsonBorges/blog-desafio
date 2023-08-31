import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  titleContentMain:string = "Bem-vindo(a) ao nosso blog.";
  descriptionContentMain:string = "Onde as fronteiras do conhecimento se expandem e os interesses se entrelaçam de maneira cativante! Aqui, mergulhamos em um mundo repleto de possibilidades, desde os encantos dasviagens até as profundezas das reflexões sobre a vida, tudo isso entrelaçado com os avanços emocionantes da tecnologia e os matizes diversificados da cultura.";
  footerContentMain = "Seja você um viajante ávido, um pensador curioso, um entusiasta da tecnologia ou um amante da cultura, nosso blog foi criado para você. Navegue pelas páginas, absorva as palavras e deixe-se levar por uma jornada que abraça a riqueza da experiência humana em todas as suas formas. Junte-se a nós enquanto exploramos, questionamos e celebramos os inúmeros aspectos que tornam a vida verdadeiramente cativante.";

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("theme")){
      document.body.classList.add('dark-theme');
    };
  }

}
