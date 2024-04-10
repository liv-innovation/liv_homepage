import { Component, inject, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.css']
})
export class ImpressumComponent {
  contentService: ContentService = inject(ContentService);

  constructor(private router: Router) {

  }
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }
    });
  }
}
