import { Component,inject } from '@angular/core';
import { ContentService } from '../content.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contentService: ContentService = inject(ContentService);
  
  ngAfterViewInit(): void {
    this.handleIntersection();
    window.addEventListener('scroll', this.handleIntersection);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.handleIntersection);
  }

  handleIntersection = (): void => {
    const rect = document.getElementById('contact')?.getBoundingClientRect();
    const isVisible = (rect!.top >= -60 && rect!.bottom <= window.innerHeight + 200);
    if (isVisible) {
      document.getElementById('contact__option')!.style.color = "var(--title-color)";
      document.getElementById('contact__option')!.style.fontWeight = "bold";

    } else {
      document.getElementById('contact__option')!.style.color = "var(--body-color)";
      document.getElementById('contact__option')!.style.fontWeight = "normal";

    }
  }
}
