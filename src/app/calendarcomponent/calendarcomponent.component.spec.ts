import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarcomponentComponent } from './calendarcomponent.component';

describe('CalendarcomponentComponent', () => {
  let component: CalendarcomponentComponent;
  let fixture: ComponentFixture<CalendarcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarcomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalendarcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
