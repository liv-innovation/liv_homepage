import { Component, inject } from '@angular/core';
import { ContentService } from '../content.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isDropdownOpen:boolean = false
  contentService: ContentService = inject(ContentService);
  toggleDropdown() {
    this.isDropdownOpen != this.isDropdownOpen
  }
}
