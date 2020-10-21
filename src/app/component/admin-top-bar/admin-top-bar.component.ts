import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-top-bar',
  templateUrl: './admin-top-bar.component.html',
  styleUrls: ['./admin-top-bar.component.scss']
})
export class AdminTopBarComponent implements OnInit {
  tab1Icon = 'home';
  tab1Text = 'Blog';
  tab1Active = true;

  tab2Icon = 'category';
  tab2Text = 'Category';
  tab2Active = true;

  tab3Icon = 'account_circle';
  tab3Text = 'About Me';
  tab3Active = false;
  constructor() {
  }



  ngOnInit(): void {
  }

}
