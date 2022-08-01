import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificaMemoryComponent } from './classifica-memory.component';

describe('ClassificaMemoryComponent', () => {
  let component: ClassificaMemoryComponent;
  let fixture: ComponentFixture<ClassificaMemoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassificaMemoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassificaMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
