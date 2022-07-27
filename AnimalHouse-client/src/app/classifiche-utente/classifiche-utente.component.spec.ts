import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificheUtenteComponent } from './classifiche-utente.component';

describe('ClassificheUtenteComponent', () => {
  let component: ClassificheUtenteComponent;
  let fixture: ComponentFixture<ClassificheUtenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassificheUtenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassificheUtenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
