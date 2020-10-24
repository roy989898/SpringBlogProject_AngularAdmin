import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {TopBarStoreService} from "../../akita/TopBarStateStore/TopBarStoreService";
import {BlogListItem, fakeBlogListData} from "../../FakeData";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})


export class BlogListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  blogs = new MatTableDataSource<BlogListItem>(fakeBlogListData);
  displayedColumns: string[] = ['title', 'recommended', 'published', 'updateTime'];

  constructor(private topBarStoreService: TopBarStoreService) {
    topBarStoreService.updateTopState(true, false, false, true);

  }

  ngAfterViewInit(): void {
    this.blogs.paginator = this.paginator;
    this.blogs.sort = this.sort;
  }

  ngOnInit(): void {
  }

}
