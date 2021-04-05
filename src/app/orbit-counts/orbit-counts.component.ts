import { Component, OnInit, Input } from '@angular/core';
import { totalmem } from 'os';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})


export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  constructor() { }

  ngOnInit() {
  }

  countType(type) {
    let total = 0;

    for (let satellite of this.satellites) {
      if (satellite.type === type) {
        total++
      }
    }

    return total;
  }

}

