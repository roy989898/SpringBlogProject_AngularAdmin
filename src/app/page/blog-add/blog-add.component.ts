import {Component, OnInit} from '@angular/core';
import {TopBarStoreService} from "../../akita/TopBarStateStore/TopBarStoreService";
import {Base64Service} from "../../utility/base64.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.scss']
})
export class BlogAddComponent implements OnInit {

  content = "AAAA";
  typeOptions = [
    'typ1',
    'typ2',
    'typ3',
    'typ4',
    'typ5',
  ];

  form = this.fb.group({
    title: [''],
    content: [''],
    type: [''],
    recommend: false,
    from_other_people: false,
    like: false,
    commentable: false,
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
  }

  save(): void {
    console.log(this.form.value);

  }

  post(): void {

  }
}
