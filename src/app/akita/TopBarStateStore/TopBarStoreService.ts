import {TopBarStore} from './TopBarStore';
import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class TopBarStoreService {

  constructor(private topBarStore: TopBarStore) {
  }


  updateTopState(blogBtOn: boolean, CategoryBtOn: boolean, AboutMeBtOn: boolean, topBarShow: boolean, TagBtOn = false): void {
    this.topBarStore.update({
      blogBtOn,
      CategoryBtOn,
      AboutMeBtOn,
      topBarShow,
      TagBtOn
    });

  }
}

