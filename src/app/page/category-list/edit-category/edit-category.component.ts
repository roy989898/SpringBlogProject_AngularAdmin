import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Category} from '../../../FakeData';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  newNamme: string;

  constructor(public dialogRef: MatDialogRef<EditCategoryComponent>, @Inject(MAT_DIALOG_DATA) public data: Category) {
    this.newNamme = data.name;
  }

  ngOnInit(): void {
  }

  cancelClick(): void {
    this.dialogRef.close();
  }

  changeClick(): void {
    this.dialogRef.close({id: this.data.id, name: this.newNamme});
  }
}
