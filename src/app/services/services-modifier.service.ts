import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Produit } from '../model/produits.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesModifierService {
  API = environment.API_Update
  constructor(private http : HttpClient) { 

  }


  MethodeUpDate(produits : any){
    return this.http.put<Produit>(`${this.API}/${produits.idProduit}`,produits);
  }
}
