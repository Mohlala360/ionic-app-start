import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home/geolocation',
    loadChildren: () => import('./geolocation/geolocation.module').then( m => m.GeolocationPageModule)
  },
  {
    path: 'home/search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'home/education',
    loadChildren: () => import('./education/education.module').then( m => m.EducationPageModule)
  },
  {
    path: 'home/profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'home/projects',
    loadChildren: () => import('./projects/projects.module').then( m => m.ProjectsPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
