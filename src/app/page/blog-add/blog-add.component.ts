import {Component, OnInit} from '@angular/core';
import {TopBarStoreService} from "../../akita/TopBarStateStore/TopBarStoreService";
import {Base64Service} from "../../utility/base64.service";

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

  picture: string = null;

  private base64Head = 'data:image/jpeg;base64,';

  get pictureBase64(): string {
    return this.base64Head + this.picture;
  }

  async pictureSelect(evt): Promise<void> {
    const result = await this.base64Service.getBase64(evt);
    this.picture = result;

  }

  constructor(private topBarStoreService: TopBarStoreService, private base64Service: Base64Service) {
    topBarStoreService.updateTopState(true, false, false, true);
  }

  ngOnInit(): void {
  }

}
