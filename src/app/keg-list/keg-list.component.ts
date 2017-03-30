import { Component, OnInit } from '@angular/core';
import { Keg } from './../keg.model';


@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})


export class KegListComponent implements OnInit {
  kegList: Keg[] = [
    new Keg("Squirrel IPA", "SheDoots", 5, 7.5),
    new Keg("Hop Scotch Red", "Pearl Divers", 4, 7.1),
    new Keg("Big Stick Stout", "East Side Brewlers", 6, 8, 120)
  ];

  constructor() { }

  ngOnInit() {
  }

}
