import { Component, inject } from '@angular/core';
import { ContentService } from '../content.service';
@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.css']
})
export class VisionComponent {
  contentService: ContentService = inject(ContentService);
}
