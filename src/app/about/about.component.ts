import { Component, inject } from '@angular/core';
import { ContentService } from '../content.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  contentService: ContentService = inject(ContentService);
}
