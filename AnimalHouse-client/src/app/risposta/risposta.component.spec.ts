import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RispostaComponent } from './risposta.component';

describe('RispostaComponent', () => {
  let component: RispostaComponent;
  let fixture: ComponentFixture<RispostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RispostaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RispostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
