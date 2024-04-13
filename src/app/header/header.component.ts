import { Component, inject } from '@angular/core';
import { ContentService } from '../content.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isDropdownOpen:boolean = false;
  contentService: ContentService = inject(ContentService);
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen
  }
  goto(id: string) {
    if (id != 'home') {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
    let height = window.innerWidth <= 768 ? 0.12 : 0.16;
    let element = document.getElementById(id);
      window.scrollTo({
        top: element!.offsetTop - (height * window.innerHeight),
        behavior: 'smooth'
      })
  }
}
