import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboralExperienceComponent } from './laboral-experience.component';

describe('LaboralExperienceComponent', () => {
  let component: LaboralExperienceComponent;
  let fixture: ComponentFixture<LaboralExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboralExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboralExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
