import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepFormsComponent } from './prep-forms.component';

describe('PrepFormsComponent', () => {
  let component: PrepFormsComponent;
  let fixture: ComponentFixture<PrepFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrepFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
