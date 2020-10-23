import {Component, OnInit} from '@angular/core';
import {TopBarStoreService} from "../../akita/TopBarStateStore/TopBarStoreService";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor(private topBarStoreService: TopBarStoreService) {
    topBarStoreService.updateTopState(false, false, true, true);
  }

  ngOnInit(): void {
  }


  save(): void {
    //  TODO
  }

  pictureSelect(evt): void {

    console.log(evt);

  }

  iconSelect(evt): void {
    console.log(evt);
  }

}
