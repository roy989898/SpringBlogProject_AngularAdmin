import {Component, OnInit} from '@angular/core';
import {TopBarStoreService} from "../../akita/TopBarStateStore/TopBarStoreService";
import {fakeCategoryData} from "../../FakeData";
import {AbstractControl, FormBuilder, Validators} from "@angular/forms";


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

  constructor(private topBarStoreService: TopBarStoreService, private fb: FormBuilder) {
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


}
