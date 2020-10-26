import {QueryEntity} from "@datorama/akita";
import {ErrorsState, ErrorsStore} from "./ErrorStore";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ErrorsQuery extends QueryEntity<ErrorsState> {
  errors$ = this.selectAll();
  latestError = this.selectLast();

  constructor(protected store: ErrorsStore) {
    super(store);
  }
}

