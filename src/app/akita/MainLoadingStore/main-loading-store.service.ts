import {Injectable} from '@angular/core';
import {MainLoadingState, MainLoadingStore} from "./MainLoadingStore";

@Injectable({
  providedIn: 'root'
})
export class MainLoadingStoreService {

  constructor(private store: MainLoadingStore) {
  }

  updateState(isLoading: boolean): void {
    this.store.update({
      isLoading
    });
  }
}
