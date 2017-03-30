import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './../keg.model';

@Component({
  selector: 'app-keg-edit',
  templateUrl: './keg-edit.component.html',
  styleUrls: ['./keg-edit.component.css']
})
export class KegEditComponent implements OnInit {
  @Input() editKeg: Keg;
  @Output() endEditKegSender = new EventEmitter();

  endEditKeg() {
    this.endEditKegSender.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
