import { Component, OnInit } from '@angular/core';
import { CategorieServiceService } from 'src/app/services/categorie-service.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  constructor(private data : CategorieServiceService) { }
  List:any=[];
  searchText:any;

  ngOnInit(): void {
    this.MethodeGet();
  }


  MethodeGet(){
    this.data.MethodeGet().subscribe((result) => {
        this.List = result;
        console.log(result);
    })
  }


  Delete(idCategorie	: number){
    this.data.MethodeDelete(idCategorie).subscribe(() => {
      this.List = this.List.filter((item : {idCategorie	: number}) => item.idCategorie !== idCategorie);
    })
  }

}
