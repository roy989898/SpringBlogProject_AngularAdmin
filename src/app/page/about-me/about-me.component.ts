import {Component, OnInit} from '@angular/core';
import {TopBarStoreService} from "../../akita/TopBarStateStore/TopBarStoreService";
import {FormBuilder} from '@angular/forms';
import {Base64Service} from "../../utility/base64.service";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  picture: string = null;
  icon: string = null;

  private base64Head = 'data:image/jpeg;base64,';

  get pictureBase64(): string {
    return this.base64Head + this.picture;
  }

  get iconBase64(): string {
    return this.base64Head + this.icon;
  }

  aboutMeForm = this.fb.group({
    name: [''],
    email: [''],
    phone: [''],
    about: [''],
  });

  constructor(private topBarStoreService: TopBarStoreService, private fb: FormBuilder, private base64Service: Base64Service) {
    topBarStoreService.updateTopState(false, false, true, true);
  }

  ngOnInit(): void {
  }


  save(): void {
    //  TODO

    // this.aboutMeForm.get('name').value
    // picture
    // icon
    console.log(this.aboutMeForm.value);
    this.aboutMeForm.setValue({
      name: 'new',
      email: 'new',
      phone: 'new',
      about: 'new'
    });
  }

  async pictureSelect(evt): Promise<void> {
    const result = await this.base64Service.getBase64(evt);
    this.picture = result;

  }

  async iconSelect(evt): Promise<void> {
    const result = await this.base64Service.getBase64(evt);
    this.icon = result;

  }


}
