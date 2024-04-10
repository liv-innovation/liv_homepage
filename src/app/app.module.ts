import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { VisionComponent } from './vision/vision.component';
import { RouterModule, Routes } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component';
import { HomeComponent } from './home/home.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';

const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'imprint', component: ImpressumComponent},
    {path: 'data_protection', component: DataProtectionComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleComponent,
    ProductsComponent,
    AboutComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
    VisionComponent,
    HomeComponent,
    DataProtectionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
