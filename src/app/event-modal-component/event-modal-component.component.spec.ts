import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventModalComponentComponent } from './event-modal-component.component';

describe('EventModalComponentComponent', () => {
  let component: EventModalComponentComponent;
  let fixture: ComponentFixture<EventModalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventModalComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventModalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
