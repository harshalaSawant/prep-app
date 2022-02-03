import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepObservablesComponent } from './prep-observables.component';

describe('PrepObservablesComponent', () => {
  let component: PrepObservablesComponent;
  let fixture: ComponentFixture<PrepObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrepObservablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
