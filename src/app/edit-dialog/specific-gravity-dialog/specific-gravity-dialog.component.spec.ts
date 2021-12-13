import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificGravityDialogComponent } from './specific-gravity-dialog.component';

describe('SpecificGravityDialogComponent', () => {
  let component: SpecificGravityDialogComponent;
  let fixture: ComponentFixture<SpecificGravityDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificGravityDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificGravityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
