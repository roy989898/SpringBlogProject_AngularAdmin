import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryComponent} from './category.component';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "../login/login.component";

const appRoutes: Routes = [
  {path: '', component: CategoryComponent},
  /*  {path: '', component: HomeComponent},
    {path: 'users', component: UsersComponent},
    {path: 'servers', component: ServersComponent}*/
];

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
  ]
})
export class CategoryModule {
}
