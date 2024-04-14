import { Component, inject } from '@angular/core';
import { ContentService } from '../content.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  contentService: ContentService = inject(ContentService);

  ngAfterViewInit(): void {
    this.handleIntersection();
    window.addEventListener('scroll', this.handleIntersection);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.handleIntersection);
  }

  handleIntersection = (): void => {
    const rect = document.getElementById('about')?.getBoundingClientRect();
    const rect1 = document.getElementById('vision')?.getBoundingClientRect();
    const isVisible = (rect!.top >= -window.innerHeight && rect!.bottom <= window.innerHeight + 200);
    if (isVisible) {
      document.getElementById('about__option')!.style.color = "var(--title-color)"
      document.getElementById('about__option')!.style.fontWeight = "bold";

    } else {
      document.getElementById('about__option')!.style.color = "var(--body-color)"
      document.getElementById('about__option')!.style.fontWeight = "normal";
    }
  }
}
