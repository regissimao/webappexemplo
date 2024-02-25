import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinhaUsuarioComponent } from './linha-usuario.component';

describe('LinhaUsuarioComponent', () => {
  let component: LinhaUsuarioComponent;
  let fixture: ComponentFixture<LinhaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinhaUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinhaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
