import {Component, OnDestroy} from '@angular/core';
import {TopBarQuery} from "./akita/TopBarStateStore/TopBarQuery";
import {MainLoadingQuery} from "./akita/MainLoadingStore/MainLoadingQuery";
import {MessageService} from 'primeng/api';
import {ErrorsQuery} from "./akita/ErrorStore/ErrorsQuery";
import {ErrorsStoreService} from "./akita/ErrorStore/errors-store.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})
export class AppComponent implements OnDestroy {
  title = 'angular-blog-admin';
  topBarDisplay$ = this.topBarQuery.topBarDisplay$;
  blogBtOn$ = this.topBarQuery.blogBtOn$;
  categoryBtOn$ = this.topBarQuery.categoryBtOn$;
  aboutMeBtOn$ = this.topBarQuery.aboutMeBtOn$;
  isLoading$ = this.mainLoadingQuery.isLoadingme$;
  private d?: Subscription = null;

  constructor(private topBarQuery: TopBarQuery, private mainLoadingQuery: MainLoadingQuery, private messageService: MessageService,
              private errorsQuery: ErrorsQuery, private errorsStoreService: ErrorsStoreService) {
    this.d = this.errorsQuery.latestError.subscribe((error) => {
      if (error !== undefined) {
        this.messageService.add({severity: 'error', summary: 'Error', detail: error.error});
      }
    });

  }


  addError(): void {
    this.errorsStoreService.addError("YOYO");
  }

  ngOnDestroy(): void {
    this.d?.unsubscribe();
  }
}
