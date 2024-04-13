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
  animationCounter: number = 1;
  productWidth: number = Math.round(window.innerWidth * 0.8);
  contentService: ContentService = inject(ContentService);

  ngAfterViewInit(): void {
    this.handleIntersection();
    window.addEventListener('scroll', this.handleIntersection);
    document.getElementsByClassName('products__badge')[0].classList.add('products__badge__active');
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.handleIntersection);
    clearInterval(this.animationInterval);
  }

  handleIntersection = (): void => {
    const entries = document.querySelectorAll('.products__container');

    entries.forEach((entry: any) => {
      const rect = entry.getBoundingClientRect();
      const isVisible = (rect.top >= -500 && rect.bottom <= window.innerHeight + 200);
      const badges = document.getElementsByClassName('products__badge');
      if (isVisible) {
        document.getElementById('products__option')!.style.color = "var(--title-color)"
      } else {
        document.getElementById('products__option')!.style.color = "var(--body-color)"
      }
      if (isVisible && window.innerWidth > 768) {
        if (!this.animationStarted) {
          this.animationStarted = true;
          this.animationInterval = setInterval(() => {
            const products = document.getElementById('products');
            if (products) {
              products.scrollTo({
                left: this.productWidth * this.animationCounter,
                behavior: 'smooth'
              });
              for(let i = 0; i < 3; i++) {
                badges[i].classList.remove('products__badge__active');
              }
              badges[this.animationCounter].classList.add('products__badge__active');
              if (this.animationCounter < 2) {
                this.animationCounter += 1;
              } else {
                this.animationCounter = 0;
              }
            }
          }, 3000);
        }
      } else {
        this.animationStarted = false;
        clearInterval(this.animationInterval);
      }
    });
  }
  
  scrollToSlide(item: number) {
    // const products = document.getElementById('products');
    // const badges = document.getElementsByClassName('products__badge');
    // products!.scrollTo({
    //   left: this.productWidth * this.animationCounter,
    //   behavior: 'smooth'
    // });
    // for(let i = 0; i < 3; i++) {
    //   badges[i].classList.remove('products__badge__active');
    // }
    // badges[item - 1].classList.add('products__badge__active');
  }
}