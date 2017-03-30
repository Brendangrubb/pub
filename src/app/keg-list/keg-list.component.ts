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

  deleteKeg(idx: number) {
    this.deleteKegSender.emit(idx);
  }

  constructor() { }

  ngOnInit() {
  }

}
