import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.less'],
  outputs: [ 'category' ]
})

export class AnnonceComponent implements OnInit {

category = ['produits du terroir', 'vetement', 'bateaux', 'voiture', 'emploi'];
  constructor() {

  }

  ngOnInit() {
  }
}
