import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticheUtenteComponent } from './statistiche-utente.component';

describe('StatisticheUtenteComponent', () => {
  let component: StatisticheUtenteComponent;
  let fixture: ComponentFixture<StatisticheUtenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticheUtenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticheUtenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
