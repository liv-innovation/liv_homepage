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

      const isVisible = (rect.top >= -100 && rect.bottom <= window.innerHeight + 500);

      if (isVisible && window.innerWidth >= 767) {
        
        if (!this.animationStarted) {
          this.animationStarted = true;
          this.animationInterval = setInterval(() => {
            const products = document.getElementsByClassName('products__container');
            console.log(this.animationCounter)
            if (products) {
              if (this.animationCounter < 2) {
                this.animationCounter += 1;
                products[this.animationCounter].scrollIntoView({ behavior: "smooth" });
              } else {
                this.animationCounter = 0;
                products[this.animationCounter].scrollIntoView({ behavior: "smooth" });
              }
            }
          }, 5000);
        }
      } else {
        this.animationStarted = false;
        clearInterval(this.animationInterval);
      }
    });
  }
}
