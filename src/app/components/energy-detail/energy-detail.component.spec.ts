import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyDetailComponent } from './energy-detail.component';

describe('EnergyDetailComponent', () => {
  let component: EnergyDetailComponent;
  let fixture: ComponentFixture<EnergyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnergyDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
