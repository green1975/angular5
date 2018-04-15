import { Component, OnInit } from '@angular/core';
import { Panier } from './panier';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.less']
})
export class PanierComponent implements OnInit {
panier: Panier[] =[
  { article: 'samsung galaxie S9 "blanc"', prix: 699, quantite: 1},
  { article: 'samsung nokia touch "gris"', prix: 389, quantite: 1},
  { article: 'samsung one touch S9 "blanc"', prix: 259, quantite: 1},
  { article: 'samsung xphone S9 "blanc"', prix: 560, quantite: 1}
];

nbreArticle = this.panier.length;

  constructor() {
    this.totalPanier();
   }
total = this.totalPanier();
totalPanier() {
let total = 0;
  for(let i=0; i< this.panier.length; i++) {
    total += this.panier[i].prix;
  }
  return total;
};
  ngOnInit() {


  }

}
