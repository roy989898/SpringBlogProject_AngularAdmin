import {Component, OnInit} from '@angular/core';
import {TopBarQuery} from "../../akita/TopBarStateStore/TopBarQuery";
import {MainLoadingStoreService} from "../../akita/MainLoadingStore/main-loading-store.service";
import delay from 'await-delay';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private mainLoadingStoreService: MainLoadingStoreService) {
  }

  ngOnInit(): void {
  }


  async loginClick(): Promise<void> {
   /* this.mainLoadingStoreService.updateState(true);
    await delay(2000);
    this.mainLoadingStoreService.updateState(false);*/

  }

}
