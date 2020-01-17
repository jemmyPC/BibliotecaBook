import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavVarComponent } from './top-nav-var.component';

describe('TopNavVarComponent', () => {
  let component: TopNavVarComponent;
  let fixture: ComponentFixture<TopNavVarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopNavVarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
