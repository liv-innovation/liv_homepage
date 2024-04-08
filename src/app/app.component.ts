import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { VisionComponent } from './vision/vision.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
}
