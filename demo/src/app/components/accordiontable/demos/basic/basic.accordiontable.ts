import { Component } from '@angular/core';

@Component({
  selector: 'ngbd-accordiontable-basic',
  templateUrl: './basic.accordiontable.html'
})
export class AccordiontableBasicComponent {
  content = {
    columns: ['one', 'two', 'three'],
    rows: [
      {
        cells: ['fwfg', 'three', 'four'],
        infos: ['wwe', 'dfw', 'cos']
      },
      {
        cells: ['ef', 'three', 'four'],
        infos: ['wwe', 'dfw', 'cos']
      },
      {
        cells: ['wd', 'three', 'four'],
        infos: ['wwe', 'dfw', 'cos']
      },
      {
        cells: ['wefw', 'three', 'four'],
        infos: ['wwe', 'dfw', 'cos']
      },
      {
        cells: ['wfwef', 'three', 'four'],
        infos: ['wwe', 'dfw', 'cos']
      }
    ]
  };
}
