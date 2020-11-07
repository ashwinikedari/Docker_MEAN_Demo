import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostImageComponent } from './post-image/post-image.component';
import {
  MatInputModule

} from "@angular/material/input";
import {

  MatToolbarModule

} from "@angular/material/toolbar";
import {

  MatCardModule

} from "@angular/material/card";
import {

  MatButtonModule


} from "@angular/material/button";

import { ReactiveFormsModule } from '@angular/forms';
import { AppServiceService } from './app-service.service';
import { ListImageComponent } from './list-image/list-image.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    PostImageComponent,
    ListImageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
