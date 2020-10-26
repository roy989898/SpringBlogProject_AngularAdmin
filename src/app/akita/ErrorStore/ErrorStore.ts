import {MainLoadingState} from "../MainLoadingStore/MainLoadingStore";
import {EntityState, EntityStore, StoreConfig} from "@datorama/akita";
import {Injectable} from "@angular/core";

export interface ErrorState {
  error: string;
  id: number;
}

export interface ErrorsState extends EntityState<ErrorState, number> {
}
@Injectable({
  providedIn: 'root'
})
@StoreConfig({name: 'errors'})
export class ErrorsStore extends EntityStore<ErrorsState> {
  constructor() {
    super();
  }
}
