import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { KegListComponent } from './keg-list/keg-list.component';
import { HeaderComponent } from './header/header.component';
import { KegEditComponent } from './keg-edit/keg-edit.component';
import { NewKegComponent } from './new-keg/new-keg.component';
import { LowPintsPipe } from './low-pints.pipe';

@NgModule({
  declarations: [
    AppComponent,
    KegListComponent,
    HeaderComponent,
    KegEditComponent,
    NewKegComponent,
    LowPintsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
