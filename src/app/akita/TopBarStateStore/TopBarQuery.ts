import {Query} from "@datorama/akita";
import {TopBarState, TopBarStore} from './TopBarStore';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class TopBarQuery extends Query<TopBarState> {

  constructor(protected store: TopBarStore) {
    super(store);
  }

}
