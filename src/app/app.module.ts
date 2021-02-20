import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { SpellingComponent } from './spelling/spelling.component';
import { MathComponent } from './math/math.component';
import {MatButtonModule} from '@angular/material/button';
import { ArtComponent } from './art/art.component';
import { ChemistryComponent } from './chemistry/chemistry.component';


@NgModule({
  declarations: [
    AppComponent,
    SpellingComponent,
    MathComponent,
    ArtComponent,
    ChemistryComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
