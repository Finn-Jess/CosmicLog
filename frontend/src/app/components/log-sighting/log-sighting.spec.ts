import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogSighting } from './log-sighting';

describe('LogSighting', () => {
  let component: LogSighting;
  let fixture: ComponentFixture<LogSighting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogSighting],
    }).compileComponents();

    fixture = TestBed.createComponent(LogSighting);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
