import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserisciEmailComponent } from './inserisci-email.component';

describe('InserisciEmailComponent', () => {
  let component: InserisciEmailComponent;
  let fixture: ComponentFixture<InserisciEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserisciEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserisciEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
