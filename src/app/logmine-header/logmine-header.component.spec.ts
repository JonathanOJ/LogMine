import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogmineHeaderComponent } from './logmine-header.component';

describe('LogmineHeaderComponent', () => {
  let component: LogmineHeaderComponent;
  let fixture: ComponentFixture<LogmineHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogmineHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogmineHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
