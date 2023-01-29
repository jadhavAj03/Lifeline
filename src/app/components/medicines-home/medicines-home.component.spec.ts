import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinesHomeComponent } from './medicines-home.component';

describe('MedicinesHomeComponent', () => {
  let component: MedicinesHomeComponent;
  let fixture: ComponentFixture<MedicinesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicinesHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicinesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
