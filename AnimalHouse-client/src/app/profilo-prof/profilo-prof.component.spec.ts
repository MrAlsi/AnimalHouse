import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiloProfComponent } from './profilo-prof.component';

describe('ProfiloProfComponent', () => {
  let component: ProfiloProfComponent;
  let fixture: ComponentFixture<ProfiloProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfiloProfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfiloProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
