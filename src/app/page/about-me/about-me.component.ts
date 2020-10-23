import {Component, OnInit} from '@angular/core';
import {TopBarStoreService} from "../../akita/TopBarStateStore/TopBarStoreService";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  picture: string = null;
  icon: string = null;

  constructor(private topBarStoreService: TopBarStoreService) {
    topBarStoreService.updateTopState(false, false, true, true);
  }

  ngOnInit(): void {
  }


  save(): void {
    //  TODO
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
        // @ts-ignore
        resolve(reader.result);
      };
      reader.onerror = error => {
        // console.log('Error: ', error);
        reject(error);
      };
    });


  }

}
