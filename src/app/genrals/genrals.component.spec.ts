import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenralsComponent } from './genrals.component';

describe('GenralsComponent', () => {
  let component: GenralsComponent;
  let fixture: ComponentFixture<GenralsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenralsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
