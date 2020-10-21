import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconNameComponent } from './icon-name.component';

describe('IonnNameComponent', () => {
  let component: IconNameComponent;
  let fixture: ComponentFixture<IconNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
