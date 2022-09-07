import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoricoPrenotazioniComponent } from './storico-prenotazioni.component';

describe('StoricoPrenotazioniComponent', () => {
  let component: StoricoPrenotazioniComponent;
  let fixture: ComponentFixture<StoricoPrenotazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoricoPrenotazioniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoricoPrenotazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
