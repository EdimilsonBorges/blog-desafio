import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContentsComponent } from './components/contents/contents.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { CardRigthComponent } from './components/card-rigth/card-rigth.component';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ContentsComponent,
    SmallCardComponent,
    CardRigthComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
