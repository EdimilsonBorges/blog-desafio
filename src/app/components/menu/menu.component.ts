import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input()
  urlLinkedin: string = "";
  @Input()
  urlGitHub: string = "";
  @Input()
  urlInstagran: string = "";
  
  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  goToHome() {
    this.router.navigate(['']);
  }

  goToAbout() {
    this.router.navigate(['/about']);
  }
  goToMission() {
    this.router.navigate(['/mission']);
  }

  toggleTheme() {
    if(localStorage.getItem("theme") != "dark"){
      console.log(localStorage.getItem("theme"));
      document.body.classList.toggle('dark-theme');
      localStorage.setItem('theme', 'dark');
    }else{
      document.body.classList.toggle('dark-theme');
      localStorage.removeItem('theme');
      console.log(localStorage.getItem("theme"));
    }
  }

}
