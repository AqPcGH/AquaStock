import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacksizeDialogComponent } from './packsize-dialog.component';

describe('PacksizeDialogComponent', () => {
  let component: PacksizeDialogComponent;
  let fixture: ComponentFixture<PacksizeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacksizeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacksizeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
