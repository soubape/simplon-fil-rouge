import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AjouterCategorieService } from 'src/app/produits-modifier/ajouter-categorie.service';

@Component({
  selector: 'app-ajouter-categorie',
  templateUrl: './ajouter-categorie.component.html',
  styleUrls: ['./ajouter-categorie.component.css']
})
export class AjouterCategorieComponent implements OnInit {
    List:any=[];

  categorie:any={
    idCategorie : "",
    label : "",
  }
  constructor(private categorieService: AjouterCategorieService,
    private router : Router) {   }

  ngOnInit(): void {
  }


  MethodeAjouterCategorie(){
    this.categorieService.AjouterCategorie(this.categorie)
    .subscribe((item) => {
      this.List = [item,...this.List]
    })
    this.router.navigate(["categorie"])
  }
}
