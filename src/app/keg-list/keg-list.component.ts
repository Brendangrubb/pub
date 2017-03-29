import { Component, OnInit } from '@angular/core';
import { Keg } from './../keg';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent implements OnInit {
  kegList: Keg[] = [];

  constructor() { }

  ngOnInit() {
  }

}
