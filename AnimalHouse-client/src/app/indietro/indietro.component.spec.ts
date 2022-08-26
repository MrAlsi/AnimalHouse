import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndietroComponent } from './indietro.component';

describe('IndietroComponent', () => {
  let component: IndietroComponent;
  let fixture: ComponentFixture<IndietroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndietroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndietroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
