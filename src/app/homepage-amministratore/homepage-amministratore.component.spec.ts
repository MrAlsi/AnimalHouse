import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageAmministratoreComponent } from './homepage-amministratore.component';

describe('HomepageAmministratoreComponent', () => {
  let component: HomepageAmministratoreComponent;
  let fixture: ComponentFixture<HomepageAmministratoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageAmministratoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageAmministratoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
