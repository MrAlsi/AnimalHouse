import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminaAccountComponent } from './elimina-account.component';

describe('EliminaAccountComponent', () => {
  let component: EliminaAccountComponent;
  let fixture: ComponentFixture<EliminaAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminaAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminaAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
