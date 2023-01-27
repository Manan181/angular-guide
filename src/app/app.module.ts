import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Assignment3Component } from './components/assignment3/assignment3.component';

@NgModule({
  declarations: [
    AppComponent,
    Assignment3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    IonicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
