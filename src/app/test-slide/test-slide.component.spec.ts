import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSlideComponent } from './test-slide.component';

describe('TestSlideComponent', () => {
  let component: TestSlideComponent;
  let fixture: ComponentFixture<TestSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
