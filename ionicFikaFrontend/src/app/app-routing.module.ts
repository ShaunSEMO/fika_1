import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'choose-platform',
    loadChildren: () => import('./pages/choose-platform/choose-platform.module').then( m => m.ChoosePlatformPageModule)
  },
  {
    path: 'choose-start-dest',
    loadChildren: () => import('./pages/choose-start-dest/choose-start-dest.module').then( m => m.ChooseStartDestPageModule)
  },
  {
    path: 'choose-route',
    loadChildren: () => import('./pages/choose-route/choose-route.module').then( m => m.ChooseRoutePageModule)
  },
  {
    path: 'trip-dets',
    loadChildren: () => import('./pages/trip-dets/trip-dets.module').then( m => m.TripDetsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
