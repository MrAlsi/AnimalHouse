import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyAnimalComponent } from './baby-animal.component';

describe('BabyAnimalComponent', () => {
  let component: BabyAnimalComponent;
  let fixture: ComponentFixture<BabyAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabyAnimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
