import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesModifierService } from '../services/services-modifier.service';

@Component({
  selector: 'app-produits-modifier',
  templateUrl: './produits-modifier.component.html',
  styleUrls: ['./produits-modifier.component.css']
})
export class ProduitsModifierComponent implements OnInit {
  produits:any = {
    idProduit : "",
    title : "",
    dateCommande:"",
    quantite:"",
    CategorieId:""

  }

  constructor(private dataUpdate : ServicesModifierService,
    private router : Router) { }

  ngOnInit(): void {
  }


  MethodePut(){
    this.dataUpdate.MethodeUpDate(this.produits).subscribe((item) => {
      console.log(item)
        // this.EmptyUnput();

        this.router.navigate(["produits"]);
    })
  }

  // EmptyUnput(){
  //   this.produits = "";
  // }

}
