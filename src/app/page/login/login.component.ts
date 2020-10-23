import {Component, OnInit} from '@angular/core';
import {TopBarQuery} from "../../akita/TopBarStateStore/TopBarQuery";
import {MainLoadingStoreService} from "../../akita/MainLoadingStore/main-loading-store.service";
import delay from 'await-delay';
import {Router} from '@angular/router';
import {TopBarStoreService} from "../../akita/TopBarStateStore/TopBarStoreService";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

// import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /*
    loginForm = new FormGroup({
      name: new FormControl(''),
      password: new FormControl(''),
    });
  */
  hide = true;
  loginForm = this.fb.group({
    name: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private mainLoadingStoreService: MainLoadingStoreService, private router: Router
    , private topBarStoreService: TopBarStoreService, private fb: FormBuilder) {
    topBarStoreService.updateTopState(false, false, false, false);
  }

  ngOnInit(): void {
  }


  async loginClick(): Promise<void> {
    console.warn(this.loginForm.value);
    this.mainLoadingStoreService.updateState(true);
    await delay(2000);
    this.mainLoadingStoreService.updateState(false);
    // await this.router.navigateByUrl('/category');

  }

}
