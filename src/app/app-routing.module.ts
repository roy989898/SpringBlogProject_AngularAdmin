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
    path: 'tag',
    loadChildren: () => import('./page/tag-list/tag-list.module').then(m => m.TagListModule)
  },
  {
    path: 'aboutme',
    loadChildren: () => import('./page/about-me/about-me.module').then(m => m.AboutMeModule)
  },
  {
    path: 'bloglist',
    loadChildren: () => import('./page/blog-list/blog-list.module').then(m => m.BlogListModule)
  },
  {
    path: 'blogadd',
    loadChildren: () => import('./page/blog-add/blog-add.module').then(m => m.BlogAddModule)
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
