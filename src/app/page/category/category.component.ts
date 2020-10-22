import {Component, OnInit} from '@angular/core';
import {TopBarStoreService} from "../../akita/TopBarStateStore/TopBarStoreService";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(private topBarStoreService: TopBarStoreService) {
    topBarStoreService.updateTopState(false, true, false, true);

  }

  ngOnInit(): void {
  }

}
