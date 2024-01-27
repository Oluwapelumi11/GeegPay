import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Error404ComComponent } from './error-404-com.component';

describe('Error404ComComponent', () => {
  let component: Error404ComComponent;
  let fixture: ComponentFixture<Error404ComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Error404ComComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Error404ComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
