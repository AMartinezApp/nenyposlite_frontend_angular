import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcftypeComponent } from './ncftype.component';

describe('NcftypeComponent', () => {
  let component: NcftypeComponent;
  let fixture: ComponentFixture<NcftypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NcftypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NcftypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
