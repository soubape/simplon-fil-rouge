import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategorieServiceService {
  API = "http://localhost:8082/api/categories";
  constructor(private http : HttpClient ){
    
  }


  MethodeGet(){
    return this.http.get(this.API);
  }


  MethodeDelete(idCategorie	:number){
    return this.http.delete(`${this.API}/${idCategorie}`)
  }
}
