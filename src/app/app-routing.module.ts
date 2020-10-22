import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

const routes: Routes = [

  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./page/category-list/category.module').then(m => m.CategoryModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
