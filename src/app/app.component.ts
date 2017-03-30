import { Component } from '@angular/core';
import { Keg }       from './keg.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  kegList: Keg[] = [
    new Keg("Squirrel IPA", "SheDoots", 5, 7.5),
    new Keg("Hop Scotch Red", "Pearl Divers", 4, 7.1),
    new Keg("Big Stick Stout", "East Side Brewlers", 6, 8, 120)
  ];

  deleteKeg(idx: number) {
    this.kegList.splice(idx, 1);
  }



}
