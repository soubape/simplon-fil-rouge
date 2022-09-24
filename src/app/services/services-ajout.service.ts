import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesAjoutService {
  API = environment.API_Ajout;
  constructor( private http: HttpClient) { 
  }

  ajouterProduits(produits:any){
    return this.http.post(this.API,produits);
  }
}

