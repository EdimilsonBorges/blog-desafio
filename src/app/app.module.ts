import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContentsComponent } from './components/contents/contents.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { CardRigthComponent } from './components/card-rigth/card-rigth.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { DetailsComponent } from './pages/details/details.component';
import { AboutComponent } from './pages/about/about.component';
import { ContentAboutComponent } from './components/content-about/content-about.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './pages/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ContentsComponent,
    SmallCardComponent,
    CardRigthComponent,
    FooterComponent,
    NotfoundComponent,
    DetailsComponent,
    AboutComponent,
    ContentAboutComponent,
    PostComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
