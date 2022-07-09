import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiCuriositaComponent } from './aggiungi-curiosita.component';

describe('AggiungiCuriositaComponent', () => {
  let component: AggiungiCuriositaComponent;
  let fixture: ComponentFixture<AggiungiCuriositaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggiungiCuriositaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggiungiCuriositaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
