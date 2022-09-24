import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsModifierComponent } from './produits-modifier.component';

describe('ProduitsModifierComponent', () => {
  let component: ProduitsModifierComponent;
  let fixture: ComponentFixture<ProduitsModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitsModifierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitsModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
