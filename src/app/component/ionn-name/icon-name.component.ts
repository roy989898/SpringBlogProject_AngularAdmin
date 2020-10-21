import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-name',
  templateUrl: './icon-name.component.html',
  styleUrls: ['./icon-name.component.scss']
})
export class IconNameComponent implements OnInit {

  constructor() {
  }

  @Input()
  iconName = '';

  @Input()
  text = '';

  @Input()
  active = true;

  ngOnInit(): void {
  }

}
