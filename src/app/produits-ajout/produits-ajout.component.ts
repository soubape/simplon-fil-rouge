import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesAjoutService } from '../services/services-ajout.service';

@Component({
  selector: 'app-produits-ajout',
  templateUrl: './produits-ajout.component.html',
  styleUrls: ['./produits-ajout.component.css']
})
export class ProduitsAjoutComponent implements OnInit {
  prod :any = [];
  produits:any = {
    idProduit : "",
    title : "",
    dateCommande:"",
    quantite:"",
    CategorieId:""

  }
  
  constructor(private produitsService:ServicesAjoutService,
    private router : Router) { }
  
    
  ngOnInit(): void {
  }

  methodeAjoutProduit(){
    this.produitsService.ajouterProduits(this.produits).subscribe((item) =>{
      this.prod=[item,...this.prod]
      this.router.navigate(["produits"]);
    })
  }


}
