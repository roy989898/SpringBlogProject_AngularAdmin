import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlogListComponent} from './blog-list.component';
import {RouterModule, Routes} from "@angular/router";
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from "@angular/material/button";

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
    CommonModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class BlogListModule {
}
