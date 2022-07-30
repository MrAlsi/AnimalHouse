import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovoPostComponent } from './nuovo-post.component';

describe('NuovoPostComponent', () => {
  let component: NuovoPostComponent;
  let fixture: ComponentFixture<NuovoPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuovoPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuovoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
