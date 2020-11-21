import {Component, OnInit} from '@angular/core';
import {fakeTagData, Tag} from "../../FakeData";
import {TopBarStoreService} from "../../akita/TopBarStateStore/TopBarStoreService";
import {FormBuilder, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {EditCategoryComponent} from "../category-list/edit-category/edit-category.component";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {

  tags = fakeTagData;
  dataSource = new MatTableDataSource<Tag>();

  displayedColumns: string[] = ['id', 'name', 'operation'];
  tagForm = this.fb.group({
    tag: ['', [Validators.required]],
  });

  constructor(private topBarStoreService: TopBarStoreService, private fb: FormBuilder, public dialog: MatDialog) {
    topBarStoreService.updateTopState(false, false, false, true, true);
    this.dataSource.data = this.tags;
  }

  ngOnInit(): void {
  }

  editClick(element: Tag): void {
    //  TODO

    const dialogRef = this.dialog.open(EditCategoryComponent, {
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      console.log(result);

      if (result !== undefined && result.id !== undefined && result.name !== undefined) {
        this.tags.forEach((tag) => {
          if (tag.id === result.id) {
            tag.name = result.name;
          }
        });

      } else {

      }
    });
  }

  deleteClick(element: Tag): void {
    //  TODO
    console.log(element);
  }

  addClick(): void {
    //  TODO

    const newTag: Tag = {name: this.tagForm.value.tag, id: this.tags[this.tags.length - 1].id + 1};
    this.tags.push(newTag);
    console.log(this.tags);
    this.dataSource.data = this.tags;
    this.tagForm.reset();
  }
}
