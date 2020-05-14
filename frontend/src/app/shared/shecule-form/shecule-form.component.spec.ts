import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheculeFormComponent } from './shecule-form.component';

describe('SheculeFormComponent', () => {
  let component: SheculeFormComponent;
  let fixture: ComponentFixture<SheculeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheculeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheculeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
