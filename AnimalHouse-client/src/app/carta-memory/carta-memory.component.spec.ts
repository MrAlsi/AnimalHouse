import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaMemoryComponent } from './carta-memory.component';

describe('CartaMemoryComponent', () => {
  let component: CartaMemoryComponent;
  let fixture: ComponentFixture<CartaMemoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaMemoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
