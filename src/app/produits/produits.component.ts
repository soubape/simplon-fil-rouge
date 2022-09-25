import { Component, OnInit } from '@angular/core';
import { ProduitsServiceService } from '../services/produits-service.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  List:any=[];
  searchText:any;

  constructor(private data : ProduitsServiceService) { }

  ngOnInit(): void {
    this.GetALLProduits();
  }


  GetALLProduits(){
      this.data.MethodeGetAll()
      .subscribe((result) => {
        this.List = result; 
        console.log(result);
      })
  }

  DeleteProduits(idProduit : number){
    this.data.MethodeDelete(idProduit)
    .subscribe(() => {
      this.List = this.List.filter((item : {idProduit:number}) => item.idProduit ! == idProduit)
    })

    window.location.reload();
  }
}
