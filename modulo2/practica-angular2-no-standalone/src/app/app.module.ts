import { ResaltarDirective } from './directives/my-directive.directive';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyPipePipe } from './pipes/my-pipe.pipe';
import { EjemploComponent } from './components/ejemplo/ejemplo.component';

@NgModule({
  declarations: [
    AppComponent,
    EjemploComponent,
    ResaltarDirective,
    MyPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
