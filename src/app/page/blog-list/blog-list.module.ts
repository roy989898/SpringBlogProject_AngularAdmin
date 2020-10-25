import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlogListComponent} from './blog-list.component';
import {RouterModule, Routes} from "@angular/router";
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from "@angular/material/button";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";

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
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class BlogListModule {
}
