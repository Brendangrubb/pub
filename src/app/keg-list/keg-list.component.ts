import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './../keg.model';


@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})


export class KegListComponent implements OnInit {
  @Input() kegList: Keg[];
  @Output() deleteKegSender = new EventEmitter();
  @Output() sellPintSender = new EventEmitter();
  @Output() editKegSender = new EventEmitter();
  @Output() newKegSender = new EventEmitter();

  lowABV = 5.5;
  highABV = 7.0;

  deleteKeg(idx: number) {
    this.deleteKegSender.emit(idx);
  }

  sellPint(idx: number) {
    this.sellPintSender.emit(idx);
  }

  startEditKeg(idx) {
    this.editKegSender.emit(idx);
  }

  startNewKeg() {
    this.newKegSender.emit();
  }

  constructor() { }

  ngOnInit() {
  }

  colorABV(thisKeg: Keg) {
    let thisColor = "bg-warning";
    if (thisKeg.alcoholContent <= this.lowABV) {
      thisColor = "bg-success";
    }
    if (thisKeg.alcoholContent >= this.highABV) {
      thisColor = "bg-danger";
    }
    return thisColor;
  }

}
