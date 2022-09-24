import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceUpdateService {
  API = environment.API_Categorie;

  constructor(private http : HttpClient) {

   }


   MethoePut(categorie:any){
    return this.http.put(`${this.API}/${categorie.idCategorie}`,categorie);
   }

   
}
