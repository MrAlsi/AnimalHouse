import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimenticataComponent } from './dimenticata.component';

describe('DimenticataComponent', () => {
  let component: DimenticataComponent;
  let fixture: ComponentFixture<DimenticataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DimenticataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DimenticataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
