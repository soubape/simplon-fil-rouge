import { Component, OnInit } from '@angular/core';
import { ServiceUpdateService } from 'src/app/services/service-update-service';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.css']
})
export class UpdateCategorieComponent implements OnInit {

  categorie:any = {
    idCategorie : "",
    label : "",
  }
  constructor(private UpdateData : ServiceUpdateService) { }

  ngOnInit(): void {
  }


    Update(){
      this.UpdateData.MethoePut()
    }


}
