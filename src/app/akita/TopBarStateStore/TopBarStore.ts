import {Store, StoreConfig} from '@datorama/akita';
import {Injectable} from "@angular/core";

export interface TopBarState {
  blogBtOn: boolean;
  CategoryBtOn: boolean;
  AboutMeBtOn: boolean;
  topBarShow: boolean;
}


export function createInitialState(): TopBarState {
  return {
    blogBtOn: false,
    CategoryBtOn: false,
    AboutMeBtOn: false,
    topBarShow: false,
  };
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'topbar'})
export class TopBarStore extends Store<TopBarState> {
  constructor() {
    super(createInitialState());
  }
}
