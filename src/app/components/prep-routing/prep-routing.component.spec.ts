import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepRoutingComponent } from './prep-routing.component';

describe('PrepRoutingComponent', () => {
  let component: PrepRoutingComponent;
  let fixture: ComponentFixture<PrepRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrepRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
