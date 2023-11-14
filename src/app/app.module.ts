import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ObervaleDemoComponent } from './components/obervale-demo/obervale-demo.component';
import { FormsComponent } from './components/forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveformsComponent } from './components/reactiveforms/reactiveforms.component';

@NgModule({
  declarations: [
    AppComponent,
    ObervaleDemoComponent,
    FormsComponent,
    ReactiveformsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
