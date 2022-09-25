import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { UpdateCategorieComponent } from './components/update-categorie/update-categorie.component';
import { ProduitsComponent } from './produits/produits.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ProduitsModifierComponent } from './produits-modifier/produits-modifier.component';
import { ProduitsAjoutComponent } from './produits-ajout/produits-ajout.component';
import { AjouterCategorieComponent } from './components/ajouter-categorie/ajouter-categorie.component';

@NgModule({
  declarations: [
    ProduitsComponent,
    AppComponent,
    NavBarComponent,
      HomeComponent,
         ProduitsAjoutComponent,
         ProduitsModifierComponent,
         CategorieComponent,
         AjouterCategorieComponent,
         UpdateCategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
