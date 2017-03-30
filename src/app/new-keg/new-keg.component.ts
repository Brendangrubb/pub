import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './../keg.model';

@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})
export class NewKegComponent implements OnInit {
  @Input() showNewKegForm: boolean;
  @Output() savedNewKegSender = new EventEmitter();
  @Output() cancelNewKegSender = new EventEmitter();

  saveNewKeg(brewName: string, brewBrand: string, price: number, alcoholContent: number, pintsRemaining: number) {
    let newKeg = new Keg(brewName, brewBrand, price, alcoholContent, pintsRemaining)
    this.savedNewKegSender.emit(newKeg);
  }

  cancelSaveNewKeg() {
    this.cancelNewKegSender.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
