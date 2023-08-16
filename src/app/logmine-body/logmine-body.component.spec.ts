import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogmineBodyComponent } from './logmine-body.component';

describe('LogmineBodyComponent', () => {
  let component: LogmineBodyComponent;
  let fixture: ComponentFixture<LogmineBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogmineBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogmineBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
