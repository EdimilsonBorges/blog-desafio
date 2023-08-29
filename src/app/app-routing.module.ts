import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  }
  ,
  {
    path: 'services',
    component: DetailsComponent
  }
  ,
  {
    path: 'about',
    component: DetailsComponent
  }
  ,
  {
    path: 'mission',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
