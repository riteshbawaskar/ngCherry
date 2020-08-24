import { Component, OnInit } from '@angular/core';
import { SplitComponent, SplitAreaDirective } from 'angular-split';

@Component({
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {

  split: SplitComponent;
  area1: SplitAreaDirective;
  area2: SplitAreaDirective;

  direction: string = 'horizontal';
  /*   sizes = {
      percent: {
          area1: 35,
          area2: 65,
      },
      pixel: {
          area1: 120,
          area2: '*',
          area3: 160,
      },
  } */

  constructor() { }

  ngOnInit() {
  }

   dragEnd(unit, {sizes}) {
/*    if(unit === 'percent') {
        this.sizes.percent.area1 = sizes[0];
        this.sizes.percent.area2 = sizes[1];
    }
    else if(unit === 'pixel') {
        this.sizes.pixel.area1 = sizes[0];
        this.sizes.pixel.area2 = sizes[1];
        this.sizes.pixel.area3 = sizes[2];
    }*/
} 

}
