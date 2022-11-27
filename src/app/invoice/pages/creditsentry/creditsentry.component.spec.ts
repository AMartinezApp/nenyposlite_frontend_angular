import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsentryComponent } from './creditsentry.component';

describe('CreditsentryComponent', () => {
  let component: CreditsentryComponent;
  let fixture: ComponentFixture<CreditsentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditsentryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditsentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
