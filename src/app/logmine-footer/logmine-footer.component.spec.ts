import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogmineFooterComponent } from './logmine-footer.component';

describe('LogmineFooterComponent', () => {
  let component: LogmineFooterComponent;
  let fixture: ComponentFixture<LogmineFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogmineFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogmineFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
