import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarOrdenadorComponent } from './editar-ordenador.component';

describe('EditarOrdenadorComponent', () => {
  let component: EditarOrdenadorComponent;
  let fixture: ComponentFixture<EditarOrdenadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarOrdenadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarOrdenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
