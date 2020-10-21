import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';
import {environment} from '../environments/environment';


import {MatIconModule} from '@angular/material/icon';
import { AdminTopBarComponent } from './component/admin-top-bar/admin-top-bar.component';
import { IconNameComponent } from './component/ionn-name/icon-name.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminTopBarComponent,
    IconNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule, MatIconModule,
    BrowserAnimationsModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
