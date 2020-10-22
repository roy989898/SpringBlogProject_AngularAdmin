import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryComponent} from './category.component';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "../login/login.component";
import {EditorModule} from 'primeng/editor';
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

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
    EditorModule,
    RouterModule.forChild(appRoutes),
    FormsModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class CategoryModule {
}
