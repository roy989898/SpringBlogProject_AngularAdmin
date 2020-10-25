import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlogAddComponent} from './blog-add.component';
import {RouterModule, Routes} from "@angular/router";
import {CategoryComponent} from "../category-list/category.component";
import {EditorModule} from "primeng/editor";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {QuillModule} from "ngx-quill";

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
    CommonModule,
    EditorModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    QuillModule
  ]
})
export class BlogAddModule {
}
