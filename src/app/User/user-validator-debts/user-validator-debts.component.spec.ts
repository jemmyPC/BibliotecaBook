import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserValidatorDebtsComponent } from './user-validator-debts.component';

describe('UserValidatorDebtsComponent', () => {
  let component: UserValidatorDebtsComponent;
  let fixture: ComponentFixture<UserValidatorDebtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserValidatorDebtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserValidatorDebtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
