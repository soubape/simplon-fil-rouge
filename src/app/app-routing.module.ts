import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterCategorieComponent } from './components/ajouter-categorie/ajouter-categorie.component';
import { CategorieComponent } from './categorie/categorie.component';
import { HomeComponent } from './components/home/home.component';
import { ProduitsModifierComponent } from './produits-modifier/produits-modifier.component';
import { ProduitsComponent } from './produits/produits.component';
import { ProduitsAjoutComponent } from './produits-ajout/produits-ajout.component';

const routes: Routes = [
  {path:"produits",component:ProduitsComponent},
  {path:"categorie",component:CategorieComponent},
  {path:"categorie/AjoutCategorie",component:AjouterCategorieComponent},
  {path:"",component:HomeComponent},
  {path:"produits/ajout",component:ProduitsAjoutComponent},
  {path:"produits/Update/:idProduit",component:ProduitsModifierComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
