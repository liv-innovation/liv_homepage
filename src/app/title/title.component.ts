import { Component, inject } from '@angular/core';
import { ContentService } from '../content.service';
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
  contentService: ContentService = inject(ContentService);
  goto(id: string) {

    let height = window.innerWidth <= 768 ? 0.12 : 0.16;
    let element = document.getElementById(id);
      window.scrollTo({
        top: element!.offsetTop - (height * window.innerHeight),
        behavior: 'smooth'
      })
  }
}
