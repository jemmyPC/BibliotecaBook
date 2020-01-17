import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestValidatorComponent } from './test-validator.component';

describe('TestValidatorComponent', () => {
  let component: TestValidatorComponent;
  let fixture: ComponentFixture<TestValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
