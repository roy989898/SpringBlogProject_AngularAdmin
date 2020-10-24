import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlogListComponent} from './blog-list.component';
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  {path: '', component: BlogListComponent},
  /*  {path: '', component: HomeComponent},
    {path: 'users', component: UsersComponent},
    {path: 'servers', component: ServersComponent}*/
];

@NgModule({
  declarations: [BlogListComponent],
  imports: [
    RouterModule.forChild(appRoutes),
    CommonModule
  ]
})
export class BlogListModule {
}
