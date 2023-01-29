import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MedicinesHomeComponent } from './components/medicines-home/medicines-home.component';
import{ BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TopDealsComponent } from './components/top-deals/top-deals.component';
import { FormsModule } from '@angular/forms';
import{HttpClientModule}from '@angular/common/http';
import { ViewProductDetailsComponent } from './components/view-product-details/view-product-details.component';
import { ViewProductDetailsCategoryComponent } from './components/view-product-details-category/view-product-details-category.component'
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        PageNotFoundComponent,
        MedicinesHomeComponent,
        TopDealsComponent,
        ViewProductDetailsComponent,
        ViewProductDetailsCategoryComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CarouselModule,
        FormsModule,
        HttpClientModule
    ]
})
export class AppModule { }
