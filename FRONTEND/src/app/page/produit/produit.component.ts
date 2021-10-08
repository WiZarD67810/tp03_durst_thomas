import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit.model';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  @Input()
  Produit: Produit = new Produit("", "", 0);

  constructor() { }

  ngOnInit(): void {

  }
}
