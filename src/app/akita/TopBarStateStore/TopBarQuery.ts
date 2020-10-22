import {Query} from "@datorama/akita";
import {TopBarState, TopBarStore} from './TopBarStore';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class TopBarQuery extends Query<TopBarState> {

  topBarDisplay$ = this.select('topBarShow');
  blogBtOn$ = this.select('blogBtOn');
  categoryBtOn$ = this.select('CategoryBtOn');
  aboutMeBtOn$ = this.select('AboutMeBtOn');

  constructor(protected store: TopBarStore) {
    super(store);
  }

}
