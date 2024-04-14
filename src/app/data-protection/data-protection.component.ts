import { Component, inject } from '@angular/core';
import { ContentService } from '../content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-protection',
  templateUrl: './data-protection.component.html',
  styleUrls: ['./data-protection.component.css']
})
export class DataProtectionComponent {
  contentService:ContentService = inject(ContentService);

  constructor(private router: Router) {

  }

  ngAfterViewInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    if (window.innerWidth > 768) {
      document.getElementById('header_1')!.style.display = 'none';
    } else {
      document.getElementById('header_2')!.style.display = 'none';
    }

  }

  ngOnDestroy(): void {
    if (window.innerWidth > 768) {
      document.getElementById('header_1')!.style.display = 'flex';
    } else {
      document.getElementById('header_2')!.style.display = 'block';
    }
  }

  goto(id: string) {

    if ( id === 'home') {
      this.router.navigate(['/']);
    }
  }
}
