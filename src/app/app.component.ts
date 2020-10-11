import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Demo-Project';
  navBar = false;

  ngOnInit() {

  }

  toggleNav() {
    this.navBar = !this.navBar;
    if (this.navBar) {
      this.openNav();
    } else {
      this.closeNav();
    }
  }

  openNav() {
    document.getElementById("mySidebar").style.width = "310px";
    document.getElementById("main").style.marginLeft = "310px";
  }

  closeNav() {
    document.getElementById("mySidebar").style.width = "90px";
    document.getElementById("main").style.marginLeft = "90px";
  }
}
