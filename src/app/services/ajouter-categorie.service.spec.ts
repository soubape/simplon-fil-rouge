import { TestBed } from '@angular/core/testing';

import { AjouterCategorieService } from '../produits-modifier/ajouter-categorie.service';

describe('AjouterCategorieService', () => {
  let service: AjouterCategorieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjouterCategorieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
