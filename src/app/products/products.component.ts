import { Component, AfterViewInit, OnDestroy } from '@angular/core';

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
      console.log(rect.top, rect.bottom, window.innerHeight)
      console.log(rect.top >= -50 , rect.bottom <= window.innerHeight + 50 )
      const isVisible = (rect.top >= -50 && rect.bottom <= window.innerHeight + 200);

      if (isVisible && window.innerWidth >= 767) {
        console.log('Element is visible on the screen:', entry.textContent);
        
        if (!this.animationStarted) {
          this.animationStarted = true;
          this.animationInterval = setInterval(() => {
            const products = document.getElementById('products');
            if (products) {
              let currentScrollLeft = products.scrollLeft,
              newScrollLeft = 0;
              if (this.animationCounter < 2) {
                this.animationCounter += 1;
                newScrollLeft = currentScrollLeft + this.productWidth;
              } else {
                this.animationCounter = 0;
                let scroll_width = (2 * this.productWidth);
                newScrollLeft = currentScrollLeft - scroll_width;
              }
              products.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
              });
            }
          }, 1500);
        }
      } else {
        this.animationStarted = false;
        clearInterval(this.animationInterval);
      }
    });
  }
}
