import {Injectable} from "@angular/core";
import {Store, StoreConfig} from "@datorama/akita";

export interface MainLoadingState {
  isLoading: boolean;
}

export function createInitialState(): MainLoadingState {
  return {
    isLoading: false
  };
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'mainloadingstore'})
export class MainLoadingStore extends Store<MainLoadingState> {
  constructor() {
    super(createInitialState());
  }
}
