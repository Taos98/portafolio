import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiesComponent } from './tecnologies.component';

describe('TecnologiesComponent', () => {
  let component: TecnologiesComponent;
  let fixture: ComponentFixture<TecnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnologiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
