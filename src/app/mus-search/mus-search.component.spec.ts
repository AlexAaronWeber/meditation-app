import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusSearchComponent } from './mus-search.component';

describe('MusSearchComponent', () => {
  let component: MusSearchComponent;
  let fixture: ComponentFixture<MusSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
