import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Ng2Bs3ModalModule, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

import { AppComponent } from './app.component';
import { PeopleService } from './people.service';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

import { AppRoutingModule } from "./app-routing.module";
import { ModalWindowComponent } from './modal-window/modal-window.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailsComponent,
    ModalWindowComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule, 
    Ng2Bs3ModalModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
