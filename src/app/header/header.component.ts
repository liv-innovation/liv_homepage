import { Component, inject } from '@angular/core';
import { ContentService } from '../content.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isDropdownOpen:boolean = false;
  contentService: ContentService = inject(ContentService);
  showSwitch: boolean = window.innerWidth > 768 ? false : true;

  constructor(private router: Router) {

  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen
  }

  goto(id: string) {
    if (id === 'home') {
      if (this.isDropdownOpen) {
        this.isDropdownOpen = !this.isDropdownOpen;
      }
    } else {
      this.isDropdownOpen = !this.isDropdownOpen;
    }

    if (this.router.url !== '/' && id === 'home') {
      this.router.navigate(['/']);
    }
    let height = window.innerWidth <= 768 ? 0.12 : 0.16;
    let element = document.getElementById(id);
      window.scrollTo({
        top: element!.offsetTop - (height * window.innerHeight),
        behavior: 'smooth'
      })
  }
}
