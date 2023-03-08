import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddweatherComponent } from './addweather.component';

describe('AddweatherComponent', () => {
  let component: AddweatherComponent;
  let fixture: ComponentFixture<AddweatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddweatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
