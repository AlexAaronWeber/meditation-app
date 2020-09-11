import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavMusComponent } from './fav-mus.component';

describe('FavMusComponent', () => {
  let component: FavMusComponent;
  let fixture: ComponentFixture<FavMusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavMusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavMusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
