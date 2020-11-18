import {Component, OnInit} from '@angular/core';
import {TopBarStoreService} from '../../akita/TopBarStateStore/TopBarStoreService';
import {Base64Service} from '../../utility/base64.service';
import {FormBuilder} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.scss']
})
export class BlogAddComponent implements OnInit {

  content = 'AAAA';
  typeOptions = [
    'typ1',
    'typ2',
    'typ3',
    'typ4',
    'typ5',
  ];

  tagOptions$: Observable<string[]>;

  form = this.fb.group({
    title: [''],
    content: [''],
    type: [''],
    recommend: false,
    from_other_people: false,
    like: false,
    commentable: false,
    tag: [''],
  });

  picture: string = null;

  private base64Head = 'data:image/jpeg;base64,';

  get pictureBase64(): string {
    return this.base64Head + this.picture;
  }

  async pictureSelect(evt): Promise<void> {
    const result = await this.base64Service.getBase64(evt);
    this.picture = result;

  }

  constructor(private topBarStoreService: TopBarStoreService, private base64Service: Base64Service, private fb: FormBuilder) {
    topBarStoreService.updateTopState(true, false, false, true);
  }

  ngOnInit(): void {

    // this.tagOptions$ = of(this.typeOptions);
  }

  save(): void {
    console.log(this.form.value);
    //  picture

  }

  post(): void {

  }

  onInputTag(value: any): void {
    // console.log(value.target.value);
    const searchKey: string = value.target.value;
    if (searchKey === '') {
      this.tagOptions$ = of([]);
    } else {
      this.tagOptions$ = of(this.typeOptions).pipe(
        map((types) => {

          return types.filter((type, index, array) => {
            return type.includes(searchKey);
          });
        })
      );
    }


  }
}
