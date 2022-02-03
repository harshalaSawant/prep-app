import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariousRoutingsComponent } from './various-routings.component';

describe('VariousRoutingsComponent', () => {
  let component: VariousRoutingsComponent;
  let fixture: ComponentFixture<VariousRoutingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariousRoutingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariousRoutingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
