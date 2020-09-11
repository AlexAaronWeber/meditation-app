import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavMedComponent } from './fav-med.component';

describe('FavMedComponent', () => {
  let component: FavMedComponent;
  let fixture: ComponentFixture<FavMedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavMedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
