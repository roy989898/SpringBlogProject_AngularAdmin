import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {TopBarStoreService} from "../../akita/TopBarStateStore/TopBarStoreService";
import {BlogListItem, fakeBlogListData} from "../../FakeData";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})


export class BlogListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  blogSearchForm = this.fb.group({
    title: [''],
    type: [''],
  });
  typeOptions = [
    'typ1',
    'typ2',
    'typ3',
    'typ4',
    'typ5',
  ];

  blogs = new MatTableDataSource<BlogListItem>(fakeBlogListData);
  displayedColumns: string[] = ['title', 'recommended', 'published', 'updateTime'];

  constructor(private topBarStoreService: TopBarStoreService, private fb: FormBuilder, private router: Router) {
    topBarStoreService.updateTopState(true, false, false, true);

  }

  ngAfterViewInit(): void {
    this.blogs.paginator = this.paginator;
    this.blogs.sort = this.sort;
  }

  ngOnInit(): void {
  }

  blogSearch(): void {
    console.log(this.blogSearchForm.value);
    // TODO
  }

  blogAddPage(): void {
    this.router.navigateByUrl('/blogadd');
  }
}
