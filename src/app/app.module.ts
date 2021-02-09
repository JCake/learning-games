import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { SpellingComponent } from './spelling/spelling.component';
import { MathComponent } from './math/math.component';

@NgModule({
  declarations: [
    AppComponent,
    SpellingComponent,
    MathComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
