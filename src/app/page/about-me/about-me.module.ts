import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutMeComponent} from "./about-me.component";
import {RouterModule, Routes} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {path: '', component: AboutMeComponent},
  /*  {path: '', component: HomeComponent},
    {path: 'users', component: UsersComponent},
    {path: 'servers', component: ServersComponent}*/
];

@NgModule({
  declarations: [
    AboutMeComponent
  ],
  imports: [
    RouterModule.forChild(appRoutes),
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AboutMeModule {
}
