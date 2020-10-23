import {Component, OnInit} from '@angular/core';
import {TopBarStoreService} from "../../akita/TopBarStateStore/TopBarStoreService";
import {fakeCategoryData} from "../../FakeData";


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categorys = fakeCategoryData;

  // dataSource = ELEMENT_DATA;
  displayedColumns: string[] = ['id', 'name', 'operation'];

  constructor(private topBarStoreService: TopBarStoreService) {
    topBarStoreService.updateTopState(false, true, false, true);

  }

  ngOnInit(): void {
  }

}
