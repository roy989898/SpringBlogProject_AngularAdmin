import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryComponent} from './category.component';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "../login/login.component";
import {EditorModule} from 'primeng/editor';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";

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
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class CategoryModule {
}
