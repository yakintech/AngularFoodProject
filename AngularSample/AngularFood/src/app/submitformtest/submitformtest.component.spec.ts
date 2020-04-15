import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitformtestComponent } from './submitformtest.component';

describe('SubmitformtestComponent', () => {
  let component: SubmitformtestComponent;
  let fixture: ComponentFixture<SubmitformtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitformtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitformtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
