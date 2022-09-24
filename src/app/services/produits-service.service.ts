import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from '../model/produits.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitsServiceService {
    API = " http://localhost:8082/api/produits";
  constructor(private http : HttpClient) { }


  MethodeGetAll(){
    return this.http.get<Produit>(this.API);
  }

  MethodeDelete(idProduit : number){
    return this.http.delete(`${this.API}/${idProduit}`)
  }


}
