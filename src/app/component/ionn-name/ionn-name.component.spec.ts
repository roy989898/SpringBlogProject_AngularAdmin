import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IonnNameComponent } from './ionn-name.component';

describe('IonnNameComponent', () => {
  let component: IonnNameComponent;
  let fixture: ComponentFixture<IonnNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IonnNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IonnNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
