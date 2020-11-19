import {Component, OnInit} from '@angular/core';
import {TopBarStoreService} from '../../akita/TopBarStateStore/TopBarStoreService';
import {Category, fakeCategoryData} from '../../FakeData';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {EditCategoryComponent} from './edit-category/edit-category.component';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categoryForm = this.fb.group({
    category: ['', [Validators.required]],
  });


  categorys = fakeCategoryData;

  // dataSource = ELEMENT_DATA;
  displayedColumns: string[] = ['id', 'name', 'operation'];

  constructor(private topBarStoreService: TopBarStoreService, private fb: FormBuilder, public dialog: MatDialog) {
    topBarStoreService.updateTopState(false, true, false, true);

  }

  ngOnInit(): void {
  }

  get category(): AbstractControl {
    return this.categoryForm.get('category');
  }


  addClick(): void {

    //  TODO
  }


  deleteClick(element: Category): void {
    //  TODO
    console.log(element);
  }

  editClick(element: Category): void {
    //  TODO
    console.log(element);
    const dialogRef = this.dialog.open(EditCategoryComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }
}
