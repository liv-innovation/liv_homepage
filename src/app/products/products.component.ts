import { Component, AfterViewInit, OnDestroy, inject } from '@angular/core';
import { ContentService } from '../content.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements AfterViewInit, OnDestroy {

  animationStarted: boolean = false;
  animationInterval: any = null;
  animationCounter: number = 0;
  productWidth: number = window.innerWidth;
  contentService: ContentService = inject(ContentService);
  
  ngAfterViewInit(): void {
    this.handleIntersection();
    window.addEventListener('scroll', this.handleIntersection);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.handleIntersection);
    clearInterval(this.animationInterval);
  }

  handleIntersection = (): void => {
    const entries = document.querySelectorAll('.products__container');

    entries.forEach((entry: any) => {
      const rect = entry.getBoundingClientRect();

      const isVisible = (rect.top >= -50 && rect.bottom <= window.innerHeight + 200);

      if (isVisible && window.innerWidth >= 767) {
        
        if (!this.animationStarted) {
          this.animationStarted = true;
          this.animationInterval = setInterval(() => {
            const products = document.getElementsByClassName('products__container');
            if (products) {
              if (this.animationCounter < 2) {
                products[this.animationCounter + 1].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
                this.animationCounter += 1;
              } else {
                this.animationCounter = 0;
                products[0].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
              }
            }
          }, 4000);
        }
      } else {
        this.animationStarted = false;
        clearInterval(this.animationInterval);
      }
    });
  }
}
