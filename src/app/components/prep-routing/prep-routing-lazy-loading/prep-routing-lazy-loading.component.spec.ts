import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepRoutingLazyLoadingComponent } from './prep-routing-lazy-loading.component';

describe('PrepRoutingLazyLoadingComponent', () => {
  let component: PrepRoutingLazyLoadingComponent;
  let fixture: ComponentFixture<PrepRoutingLazyLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrepRoutingLazyLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepRoutingLazyLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
