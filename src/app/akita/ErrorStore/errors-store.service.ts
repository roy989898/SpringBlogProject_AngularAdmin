import {Injectable} from '@angular/core';
import {ErrorsStore} from "./ErrorStore";

@Injectable({
  providedIn: 'root'
})
export class ErrorsStoreService {

  constructor(private store: ErrorsStore) {
  }


  addError(error: string): void {
    const id = (new Date()).getMilliseconds();
    this.store.add({error, id});
  }
}
