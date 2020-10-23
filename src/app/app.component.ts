import {Component} from '@angular/core';
import {TopBarQuery} from "./akita/TopBarStateStore/TopBarQuery";
import {MainLoadingQuery} from "./akita/MainLoadingStore/MainLoadingQuery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-blog-admin';
  topBarDisplay$ = this.topBarQuery.topBarDisplay$;
  blogBtOn$ = this.topBarQuery.blogBtOn$;
  categoryBtOn$ = this.topBarQuery.categoryBtOn$;
  aboutMeBtOn$ = this.topBarQuery.aboutMeBtOn$;
  isLoading$ = this.mainLoadingQuery.isLoadingme$;

  constructor(private topBarQuery: TopBarQuery, private mainLoadingQuery: MainLoadingQuery) {
  }



}
