import {Component, OnInit} from '@angular/core';
import {TopBarQuery} from "../../akita/TopBarStateStore/TopBarQuery";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-top-bar',
  templateUrl: './admin-top-bar.component.html',
  styleUrls: ['./admin-top-bar.component.scss']
})
export class AdminTopBarComponent implements OnInit {
  tab1Icon = 'home';
  tab1Text = 'Blog';
  tab1Active = false;

  tab2Icon = 'category';
  tab2Text = 'Category';
  tab2Active = false;

  tab3Icon = 'account_circle';
  tab3Text = 'About Me';
  tab3Active = false;

  tab1Active$ = this.topBarQuery.blogBtOn$;
  tab2Active$ = this.topBarQuery.categoryBtOn$;
  tab3Active$ = this.topBarQuery.aboutMeBtOn$;

  constructor(private topBarQuery: TopBarQuery, private router: Router) {
  }


  ngOnInit(): void {
  }

  blogClick(): void {
    // this.router.navigateByUrl('/category');
  }

  categoryClick(): void {
    this.router.navigateByUrl('/category');
  }

  aboutMeClick(): void {
    this.router.navigateByUrl('/aboutme');
  }
}
