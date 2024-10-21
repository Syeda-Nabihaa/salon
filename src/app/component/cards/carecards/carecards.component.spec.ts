import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarecardsComponent } from './carecards.component';

describe('CarecardsComponent', () => {
  let component: CarecardsComponent;
  let fixture: ComponentFixture<CarecardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarecardsComponent]
    });
    fixture = TestBed.createComponent(CarecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
