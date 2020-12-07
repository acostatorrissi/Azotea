import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  beer = {
    "name": "Marea negra",
    "style" : "Porter",
    "price" : "200",
    "stock": "5",
    "image" : "assets/img/1.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
