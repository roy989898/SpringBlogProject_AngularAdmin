import {Component} from '@angular/core';
import {TopBarQuery} from "./akita/TopBarStateStore/TopBarQuery";

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

  constructor(private topBarQuery: TopBarQuery) {
  }


}
