import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { EjemploComponent } from '../components/ejemplo/ejemplo.component';
import { ResaltarDirective } from '../directives/my-directive.directive';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent, EjemploComponent, ResaltarDirective],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
