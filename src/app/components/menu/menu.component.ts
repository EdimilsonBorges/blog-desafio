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

  goToServices() {
    this.router.navigate(['/services']);
  }

  goToAbout() {
    this.router.navigate(['/about']);
  }
  goToMission() {
    this.router.navigate(['/mission']);
  }

  isThemeLight: boolean = true;

  toggleTheme() {
    document.body.classList.toggle('dark-theme');
  }

}
