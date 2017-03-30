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

  deleteKeg(idx: number) {
    this.deleteKegSender.emit(idx);
  }

  sellPint(idx: number) {
    this.sellPintSender.emit(idx);
  }

  startEditKeg(idx) {
    this.editKegSender.emit(idx);
  }

  constructor() { }

  ngOnInit() {
  }

}
