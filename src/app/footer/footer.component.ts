import { Component, inject } from '@angular/core';
import { ContentService } from '../content.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  contentService: ContentService = inject(ContentService);
}
