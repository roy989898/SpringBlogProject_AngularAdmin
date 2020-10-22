import {Query} from "@datorama/akita";
import {Injectable} from "@angular/core";
import {MainLoadingState, MainLoadingStore} from "./MainLoadingStore";

@Injectable({
  providedIn: 'root',
})
export class MainLoadingQuery extends Query<MainLoadingState> {

  isLoadingme$ = this.select('isLoading');


  constructor(protected store: MainLoadingStore) {
    super(store);
  }

}
