import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'history-of-art', loadChildren: './history-of-art/history-of-art.module#HistoryOfArtPageModule' },
  { path: 'catergories-of-art', loadChildren: './catergories-of-art/catergories-of-art.module#CatergoriesOfArtPageModule' },
  { path: 'main', loadChildren: './main/main.module#MainPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'info', loadChildren: './info/info.module#InfoPageModule' },
  { path: 'sign-up', loadChildren: './sign-up/sign-up.module#SignUpPageModule' },
  { path: 'ancient-art', loadChildren: './ancient-art/ancient-art.module#AncientArtPageModule' },
  { path: 'username', loadChildren: './username/username.module#UsernamePageModule' },  { path: 'user-profile', loadChildren: './user-profile/user-profile.module#UserProfilePageModule' },
  { path: 'profile-image', loadChildren: './profile-image/profile-image.module#ProfileImagePageModule' },


    
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
