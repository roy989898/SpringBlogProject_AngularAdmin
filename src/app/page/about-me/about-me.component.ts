import {Component, OnInit} from '@angular/core';
import {TopBarStoreService} from "../../akita/TopBarStateStore/TopBarStoreService";
import {FormBuilder} from '@angular/forms';

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

  constructor(private topBarStoreService: TopBarStoreService, private fb: FormBuilder) {
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
    const result = await this.getBase64(evt);
    this.picture = result;

  }

  async iconSelect(evt): Promise<void> {
    const result = await this.getBase64(evt);
    this.icon = result;

  }

  getBase64(event): Promise<string> {
    return new Promise((resolve, reject) => {
      const me = this;
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // me.modelvalue = reader.result;
        // console.log(reader.result);

        // data:image/jpeg;base64,
        let result = reader.result as string;
        result = result.replace(this.base64Head, '');
        // console.log(reader.result);
        // @ts-ignore
        resolve(result);
      };
      reader.onerror = error => {
        // console.log('Error: ', error);
        reject(error);
      };
    });


  }

}
