import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepLifecycleHooksComponent } from './prep-lifecycle-hooks.component';

describe('PrepLifecycleHooksComponent', () => {
  let component: PrepLifecycleHooksComponent;
  let fixture: ComponentFixture<PrepLifecycleHooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrepLifecycleHooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepLifecycleHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
