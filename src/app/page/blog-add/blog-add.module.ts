import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlogAddComponent} from './blog-add.component';
import {RouterModule, Routes} from "@angular/router";
import {CategoryComponent} from "../category-list/category.component";

const appRoutes: Routes = [
  {path: '', component: BlogAddComponent},
  /*  {path: '', component: HomeComponent},
    {path: 'users', component: UsersComponent},
    {path: 'servers', component: ServersComponent}*/
];

@NgModule({
  declarations: [BlogAddComponent],
  imports: [
    RouterModule.forChild(appRoutes),
    CommonModule
  ]
})
export class BlogAddModule {
}
