import {Component, OnInit} from '@angular/core';
import {fakeTagData} from "../../FakeData";
import {TopBarStoreService} from "../../akita/TopBarStateStore/TopBarStoreService";
import {FormBuilder, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {

  tags = fakeTagData;
  displayedColumns: string[] = ['id', 'name', 'operation'];
  tagForm = this.fb.group({
    tag: ['', [Validators.required]],
  });

  constructor(private topBarStoreService: TopBarStoreService, private fb: FormBuilder, public dialog: MatDialog) {
    topBarStoreService.updateTopState(false, false, false, true, true);
  }

  ngOnInit(): void {
  }

  editClick(element: any): void {
    //  TODO
  }

  deleteClick(element: any): void {
    //  TODO
  }

  addClick(): void {
    //  TODO
  }
}
