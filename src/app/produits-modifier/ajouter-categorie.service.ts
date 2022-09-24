import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AjouterCategorieService {
 

  API = environment.API_Categorie;
  constructor(private http : HttpClient) {

   }

   AjouterCategorie(categorie  :any){
      return this.http.post(this.API,categorie)
   }

   
}
