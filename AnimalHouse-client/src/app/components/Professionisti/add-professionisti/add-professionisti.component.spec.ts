import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProfessionistiComponent } from './add-professionisti.component';

describe('AddProfessionistiComponent', () => {
  let component: AddProfessionistiComponent;
  let fixture: ComponentFixture<AddProfessionistiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProfessionistiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProfessionistiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
