import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { DetailsComponent } from './pages/details/details.component';
import { AboutComponent } from './pages/about/about.component';
import { PostsComponent } from './pages/posts/posts.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'post/:id', component: DetailsComponent
  },
  {
    path: 'pagenotfound', component: NotfoundComponent, pathMatch: 'full'
  }
  ,
  {
    path: 'posts', component: PostsComponent, pathMatch: 'full'
  }
  ,
  {
    path: 'about', component: AboutComponent, pathMatch: 'full'
  }
  ,
  {
    path: '**', redirectTo: 'pagenotfound'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
