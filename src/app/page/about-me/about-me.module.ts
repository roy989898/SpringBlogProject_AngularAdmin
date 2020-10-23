import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutMeComponent} from "./about-me.component";
import {RouterModule, Routes} from "@angular/router";

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
  ]
})
export class AboutMeModule {
}
