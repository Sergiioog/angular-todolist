import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaPrincipalComponent } from './tarea-principal.component';

describe('TareaPrincipalComponent', () => {
  let component: TareaPrincipalComponent;
  let fixture: ComponentFixture<TareaPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TareaPrincipalComponent]
    });
    fixture = TestBed.createComponent(TareaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
