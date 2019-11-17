import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPlayerSectionComponent } from './main-player-section.component';

describe('MainPlayerSectionComponent', () => {
  let component: MainPlayerSectionComponent;
  let fixture: ComponentFixture<MainPlayerSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPlayerSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPlayerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
