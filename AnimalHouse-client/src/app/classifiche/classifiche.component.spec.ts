import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificheComponent } from './classifiche.component';

describe('ClassificheComponent', () => {
  let component: ClassificheComponent;
  let fixture: ComponentFixture<ClassificheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassificheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
