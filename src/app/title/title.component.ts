import { Component, inject } from '@angular/core';
import { ContentService } from '../content.service';
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
  contentService: ContentService = inject(ContentService);
}
