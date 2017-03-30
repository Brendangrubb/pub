import { Component } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  editKeg: Keg = null;
  showNewKegForm = false;

  kegList: Keg[] = [
    new Keg('Squirrel IPA', 'SheDoots', 5, 7.5),
    new Keg('Hop Scotch Red', 'Pearl Divers', 4, 7.1),
    new Keg('Big Stick Stout', 'East Side Brewlers', 6, 8, 120)
  ];

  deleteKeg(idx: number) {
    this.kegList.splice(idx, 1);
  }

  sellPint(idx: number) {
    this.kegList[idx].pintsRemaining-- ;
  }

  startEditKeg(idx: number) {
    this.editKeg = this.kegList[idx];
  }

  endEditKeg(idx: number) {
    this.editKeg = null;
  }

  startNewKeg() {
    this.showNewKegForm = true;
  }

  savedNewKeg(newKeg: Keg) {
    this.kegList.push(newKeg);
    this.showNewKegForm = false;
  }

  cancelNewKegSender() {
    this.showNewKegForm = false;
  }

}
