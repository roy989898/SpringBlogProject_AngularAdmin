import {Component, OnInit} from '@angular/core';
import {TopBarStoreService} from "../../akita/TopBarStateStore/TopBarStoreService";
import {fakeBlogListData} from "../../FakeData";

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})


export class BlogListComponent implements OnInit {

  blogs = fakeBlogListData;
  displayedColumns: string[] = ['title', 'recommended', 'published', 'updateTime'];

  constructor(private topBarStoreService: TopBarStoreService) {
    topBarStoreService.updateTopState(true, false, false, true);

  }

  ngOnInit(): void {
  }

}
