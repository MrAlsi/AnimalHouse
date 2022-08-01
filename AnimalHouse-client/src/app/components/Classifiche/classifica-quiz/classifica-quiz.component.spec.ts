import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificaQuizComponent } from './classifica-quiz.component';

describe('ClassificaQuizComponent', () => {
  let component: ClassificaQuizComponent;
  let fixture: ComponentFixture<ClassificaQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassificaQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassificaQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
