import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogmineButtonComponent } from './logmine-button.component';

describe('LogmineButtonComponent', () => {
  let component: LogmineButtonComponent;
  let fixture: ComponentFixture<LogmineButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogmineButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogmineButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
